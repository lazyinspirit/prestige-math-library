---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-hmm-viterbi-exact-sequence-map.json
  precheck: pass
id: ex-hmm-viterbi-exact-sequence-map
kind: example
title: An exact two-state HMM sequence-MAP calculation
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
  - alg-hmm-viterbi-sequence-map
  - thm-hmm-viterbi-is-sequence-map
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the example enumerates a finite path set."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Example

Let $S=\{u,v\}$, $Y=\{0,1\}$, and
$\pi(u)=3/4$, $\pi(v)=1/4$. The transition rows are
$u\to(u,v)=(3/4,1/4)$ and $v\to(u,v)=(1/4,3/4)$. The emissions are
$B(u,0)=3/4$, $B(u,1)=1/4$, $B(v,0)=1/4$, and $B(v,1)=3/4$.
For observations $(0,1,1)$, use the state order $u\prec v$. The eight joint
path masses are:

| Hidden path | Joint mass |
|---|---:|
| $uuu$ | $81/4096$ |
| $uuv$ | $81/4096$ |
| $uvu$ | $27/4096$ |
| $uvv$ | $243/4096$ |
| $vuu$ | $3/4096$ |
| $vuv$ | $3/4096$ |
| $vvu$ | $9/4096$ |
| $vvv$ | $81/4096$ |

The observation evidence is $528/4096=33/256$.

The diagram uses arrows for transition probabilities and initial weights.
Emission probabilities are listed in the prose above each state.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw] (start) at (-2,0) {start};
\node[circle,draw] (u) at (0,1) {$u$};
\node[circle,draw] (v) at (0,-1) {$v$};
\draw[->] (start) -- node[above] {$3/4$} (u);
\draw[->] (start) -- node[below] {$1/4$} (v);
\draw[->] (u) edge[loop above] node {$3/4$} (u);
\draw[->] (v) edge[loop below] node {$3/4$} (v);
\draw[->] (u) to[bend left=15] node[right] {$1/4$} (v);
\draw[->] (v) to[bend left=15] node[left] {$1/4$} (u);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The HMM parameters and observation sequence specified in the Example.

[F1] [[def-finite-hidden-markov-model-for-sequence-decoding]]: A hidden path and observation sequence have joint mass equal to the initial, emission, transition, and later emission factors multiplied in order; positive evidence defines the conditional path mass by division by that evidence, and a sequence MAP path maximizes this conditional mass.

[F2] [[alg-hmm-viterbi-sequence-map]]: The induced trellis starts with $\pi(s)B(s,y_1)$, uses edge weights $A(r,s)B(s,y_t)$ for positive factors, and has terminal weights $1$.

[F3] [[thm-hmm-viterbi-is-sequence-map]]: With positive observation evidence, the algorithm returns a hidden-state sequence maximizing the posterior mass of the entire sequence.

## Verification

1.1 The common denominator in each joint path mass is $4^6=4096$. The numerator factor products, in the order initial, first emission, first transition, second emission, second transition, third emission, are $uuu:3\cdot3\cdot3\cdot1\cdot3\cdot1=81$, $uuv:3\cdot3\cdot3\cdot1\cdot1\cdot3=81$, $uvu:3\cdot3\cdot1\cdot3\cdot1\cdot1=27$, $uvv:3\cdot3\cdot1\cdot3\cdot3\cdot3=243$, $vuu:1\cdot1\cdot1\cdot1\cdot3\cdot1=3$, $vuv:1\cdot1\cdot1\cdot1\cdot1\cdot3=3$, $vvu:1\cdot1\cdot3\cdot3\cdot1\cdot1=9$, and $vvv:1\cdot1\cdot3\cdot3\cdot3\cdot3=81$. Their sum is $528$, so the evidence is positive and $uvv$ is the unique maximum-mass path. [given, F1, algebra]

2.1 The max-product table starts with $D_1(u)=9/16$ and $D_1(v)=1/16$. At time $2$, the best incoming products give $D_2(u)=(1/4)\max\{27/64,1/64\}=27/256$ and $D_2(v)=(3/4)\max\{9/64,3/64\}=27/256$. At time $3$, $D_3(u)=(1/4)\max\{81/1024,27/1024\}=81/4096$ and $D_3(v)=(3/4)\max\{27/1024,81/1024\}=243/4096$. The last pointer is from $v$ to $v$, and the preceding pointer for $v$ is from $u$ to $v$, so traceback gives $uvv$. This agrees with the exhaustive maximum in step 1.1; by [F3] it is a sequence MAP path. Its posterior mass is $(243/4096)/(528/4096)=81/176$. [given, F2, F3, step 1.1, algebra] ∎
