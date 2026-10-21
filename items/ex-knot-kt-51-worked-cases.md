---
id: ex-knot-kt-51-worked-cases
kind: example
title: "A trefoil Jones–Vassiliev coefficient calculation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-closure-of-a-geometric-braid
  - def-crossing-number-of-link
  - def-elementary-geometric-half-twist
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-singular-knot-and-vassiliev-derivative
  - def-temperley-lieb-closure-trace-and-partial-trace
  - def-temperley-lieb-diagram-category
  - def-temperley-lieb-quotient-and-jones-specialization
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-jones-vassiliev-coefficient-vectors
  - lem-jones-vassiliev-basis-decomposition
  - lem-kauffman-smoothing-operators-for-braid-crossings
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-bracket-state-sum-matches-library-jones-specialization
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is used through the Jones-invariance supplier; AC_omega is the declared crossing-number hypothesis. The finite state and Laurent-reduction calculations are choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Avishy Carmi and Eliahu Cohen, On trivial Jones–Vassiliev polynomials, arXiv:2606.22410v1, submitted 2026-06-21"
      url: "https://arxiv.org/pdf/2606.22410v1"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.3–4.4"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "Dror Bar-Natan and Alexander Stoimenow, The Fundamental Theorem of Vassiliev Invariants, arXiv:q-alg/9702009v1, §1.1"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
---

## Example

Assume full AC and $\mathrm{AC}_\omega$. An oriented classical knot is an
oriented smooth embedding $S^1\hookrightarrow S^3$ considered up to ambient
isotopy. A regular diagram is a generic plane projection with only transverse
double points, each marked with over/under information; $c(K)$ is the least
crossing count among regular diagrams representing $K$. Let
$T=\widehat{\sigma_1^3}$ be the oriented closure of three positive two-strand
geometric half twists, with each strand oriented in the braid direction. The
figure shows the closure; its three crossings are positive under the library
determinant convention. For any classical knot $K$, let $V_K(x)$ be the
library-normalized Jones polynomial, with $V_U(x)=1$ for the unknot $U$ and
$x=t^{1/2}$ in the convention $t=A^{-4}$. Put $p=x-x^{-1}$ and write the unique finite expansion
$V_K(x)=\sum_{q\ge0}(a_q(K)+b_q(K)x)p^q$; define
$f_q(K)=(a_q(K),b_q(K))^{\mathsf T}$.

```tikz
\begin{tikzpicture}[scale=0.88,line cap=round,line join=round]
  \draw[thick] (-0.45,3) .. controls (-1.1,3.15) and (-1.1,-0.15) .. (-0.45,0);
  \draw[thick] (0.45,3) .. controls (1.1,3.15) and (1.1,-0.15) .. (0.45,0);
  \draw[thick] (-0.45,0) .. controls (-0.45,0.28) and (-0.10,0.40) .. (-0.065,0.48);
  \draw[thick] (0.065,0.52) .. controls (0.10,0.60) and (0.45,0.72) .. (0.45,1);
  \draw[very thick] (0.45,0) .. controls (0.45,0.32) and (-0.45,0.68) .. (-0.45,1);
  \draw[thick] (-0.45,1) .. controls (-0.45,1.28) and (-0.10,1.40) .. (-0.065,1.48);
  \draw[thick] (0.065,1.52) .. controls (0.10,1.60) and (0.45,1.72) .. (0.45,2);
  \draw[very thick] (0.45,1) .. controls (0.45,1.32) and (-0.45,1.68) .. (-0.45,2);
  \draw[thick] (-0.45,2) .. controls (-0.45,2.28) and (-0.10,2.40) .. (-0.065,2.48);
  \draw[thick] (0.065,2.52) .. controls (0.10,2.60) and (0.45,2.72) .. (0.45,3);
  \draw[very thick] (0.45,2) .. controls (0.45,2.32) and (-0.45,2.68) .. (-0.45,3);
  \node at (0,3.45) {$\widehat{\sigma_1^3}$};
  \node at (0,-0.42) {positive two-strand braid closure};
\end{tikzpicture}
```

In the library Jones convention $t=A^{-4}$, the state sum gives
$V_T(t)=t+t^3-t^4$. With $x=t^{1/2}$ and $p=x-x^{-1}$, the unique
Jones–Vassiliev expansion is
$$V_T(x)=1-3p^2-4p^4-p^6+x(-6p^3-5p^5-p^7),$$
so $f_2(T)=(-3,0)^{\mathsf T}\ne0$. Carmi and Cohen's v1 preprint reports
that every nontrivial knot has such a nonzero vector at some order
$2\le q\le3c(K)$, and claims $V_K(x)=1$ implies that $K$ is the unknot.
This finite calculation checks one example only; it does not verify either
general claim or the preprint's machine-geometry proof.

## Example references

[[def-jones-vassiliev-coefficient-vectors|Jones–Vassiliev coefficient vectors]]

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket state sum]]

[[thm-bracket-state-sum-matches-library-jones-specialization|Bracket/Jones comparison]]

[Carmi and Cohen, *On trivial Jones–Vassiliev polynomials*, Theorems 6.8–6.9](https://arxiv.org/pdf/2606.22410v1)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes*, §§4.3–4.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Bar-Natan and Stoimenow, *The Fundamental Theorem of Vassiliev Invariants*, §1.1](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** Full AC, $\mathrm{AC}_\omega$, the two-strand braid $\sigma_1^3$, and its closure $T$.

[F1] A state of a nonempty diagram chooses A or B at each crossing, contributes $A^{a-b}\delta^{|S|-1}$, and has $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] In the stated chart a positive braid crossing is the operator $AI+A^{-1}e_1$, where $I$ is the through pairing and $e_1$ is the cap-cup pairing ([[lem-kauffman-smoothing-operators-for-braid-crossings]]).

[F3] Closing a basis diagram identifies each top endpoint with the corresponding bottom endpoint and assigns one factor $\delta$ to each resulting circle; stacking removes each closed cycle with the same factor ([[def-temperley-lieb-closure-trace-and-partial-trace]], [[def-temperley-lieb-diagram-category]]).

[F4] The cap-cup diagram named $e_1$ in [F2] is the elementary diagram generator $d_1$, and it satisfies $d_1^2=\delta d_1$ ([[def-temperley-lieb-diagram-category]], [[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F5] The positive elementary half twist has endpoint permutation $(1\ 2)$, and a braid closure has one component for each cycle of its endpoint permutation ([[def-elementary-geometric-half-twist]], [[def-closure-of-a-geometric-braid]]).

[F6] The positive geometric Artin half twist has determinant crossing sign $+1$ ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F7] The writhe-normalized bracket of a diagram $D$ representing $K$ is $f_K(A):=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$ ([[thm-bracket-state-sum-matches-library-jones-specialization]]).

[F8] In the library convention $t=A^{-4}$, the exact Jones value of the positive trefoil closure $T=\widehat{\sigma_1^3}$ is $V_T(t)=t+t^3-t^4$ ([[def-temperley-lieb-quotient-and-jones-specialization]]).

[F9] The library Jones polynomial is an ambient-isotopy invariant and $V_U(t)=1$ ([[def-temperley-lieb-quotient-and-jones-specialization]]).

[F10] For $p=x-x^{-1}$, every Laurent Jones polynomial has a unique expansion $\sum_q(a_q+b_qx)p^q$, and $f_q=(a_q,b_q)^{\mathsf T}$ ([[def-jones-vassiliev-coefficient-vectors]], [[lem-jones-vassiliev-basis-decomposition]]).

[F11] Under $\mathrm{AC}_\omega$, $c(K)$ is the least number of crossings among regular diagrams of $K$ ([[def-crossing-number-of-link]]).

[A1] Full AC supplies the library Jones-invariance hypothesis ([[def-axiom-of-choice]]).

[A2] $\mathrm{AC}_\omega$ is the countable-choice hypothesis in the crossing-number definition ([[def-countable-choice]]).

## Verification

1.1 For a state with $k$ B-smoothings, [F2] gives a stack of $k$ copies of $e_1$ and $3-k$ copies of $I$. If $k=0$, the closure has two circles by [F3]. If $k\ge1$, repeated use of $e_1^2=\delta e_1$ from [F4] and the one-circle closure of $e_1$ in [F3] gives exactly $k$ circles. There are $\binom{3}{k}$ choices, so [F1] gives the complete grouped state sum $\begin{array}{c|c|c|c}k&\text{states}&|S|&\text{contribution}\\\hline0&1&2&A^3\delta\\1&3&1&3A\\2&3&2&3A^{-1}\delta\\3&1&3&A^{-3}\delta^2\end{array}$. [given, F1, F2, F3, F4, construct]

2.1 Substituting $\delta=-A^2-A^{-2}$ into the grouped sum gives $\langle T\rangle=A^3\delta+3A+3A^{-1}\delta+A^{-3}\delta^2=A^{-7}-A^{-3}-A^5$. By [F5] the closure is one knot component, and [F6] gives writhe $3$. Applying [F7] therefore gives $f_T(A)=(-A^3)^{-3}\langle T\rangle=A^{-4}+A^{-12}-A^{-16}$. On the other hand, [F8] gives the exact Jones value $t+t^3-t^4$, which at $t=A^{-4}$ is the same Laurent polynomial. Thus the direct normalized state-sum calculation agrees with the library Jones value for this trefoil. [F5, F6, F7, F8, step 1.1, algebra]

3.1 Write $x^n=A_n(p)+B_n(p)x$. From $x^2=px+1$, multiplication by $x$ gives $A_{n+1}=B_n$ and $B_{n+1}=A_n+pB_n$. Starting with $x^0=1$ and $x^1=x$ yields $\begin{array}{c|l|l}n&A_n&B_n\\\hline2&1&p\\3&p&1+p^2\\4&1+p^2&2p+p^3\\5&2p+p^3&1+3p^2+p^4\\6&1+3p^2+p^4&3p+4p^3+p^5\\7&3p+4p^3+p^5&1+6p^2+5p^4+p^6\\8&1+6p^2+5p^4+p^6&4p+10p^3+6p^5+p^7\end{array}$. This lists every recurrence step needed for the powers in $V_T(x)=x^2+x^6-x^8$. [given, F10, step 2.1, algebra]

4.1 Combining the rows for $n=2,6,8$ gives $a(p)=1-3p^2-4p^4-p^6$ and $b(p)=-6p^3-5p^5-p^7$. Uniqueness in [F10] therefore gives $f_2(T)=(-3,0)^{\mathsf T}\ne0$. [F10, step 3.1, algebra]

5.1 The computed Jones polynomial is not $1$. Under [A1], [F9] gives $V_U=1$ and invariance under ambient isotopy, so $T$ is nontrivial. The displayed braid has three crossings, so under [A2] and [F11] its crossing-number set contains $3$ and $c(T)\le3$. This example verifies a nonzero coefficient at order $2$ for this single knot; the general bound and unknot-detection claim in the Example section are only reported from the source and are not used as premises. [given, A1, A2, F9, F11, step 2.1, step 4.1] ∎
