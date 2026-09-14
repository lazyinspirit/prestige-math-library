---
id: cex-kolmogorov-extension-alone-does-not-give-a-continuous-version
kind: counterexample
title: "Kolmogorov extension alone does not give a continuous version"
status: draft
origin: pipeline
deps: [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, cor-canonical-process-realizes-consistent-finite-dimensional-laws, def-independent-random-elements, cor-second-borel-cantelli-lemma-under-pairwise-independence, lem-mutual-independence-under-subfamilies-and-complements, lem-probability-measure-basic-identities, def-law-modification-and-indistinguishability-of-processes, thm-sequential-criterion-for-continuity, lem-of-triangle-inequality, cor-archimedean-reciprocal, lem-of-inverse-positive, def-axiom-of-choice]
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 7.1.1 and the following discussion, printed p. 356"
---

## Statement refuted

Assume the Axiom of Choice. Consistency of finite-dimensional laws and the
Kolmogorov extension theorem do not by themselves imply that the resulting
process has a continuous modification.

## Facts & Assumptions

**Given:** AC and the canonical fair-bit coordinate process
$X=(X_t)_{t\in[0,1]}$ constructed below.

[F1] Under AC, a consistent family of finite-dimensional laws on
standard-Borel coordinate spaces has a unique extension on the cylinder
sigma-algebra, and the canonical coordinate process realizes those laws.
Independence of random elements means independence of their generated
sigma-algebras. [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]
[[cor-canonical-process-realizes-consistent-finite-dimensional-laws]]
[[def-independent-random-elements]]

[F2] Pairwise independent events whose probability sum diverges occur
infinitely often with probability one. A finite mutually independent family
remains independent after taking a subfamily or complementing any of its
events. [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]
[[lem-mutual-independence-under-subfamilies-and-complements]]

[F3] Countable subadditivity and the complement identity imply that a
countable intersection of probability-one events has probability one; finite
intersections are a special case. [[lem-probability-measure-basic-identities]]

[F4] A modification agrees with the original process almost surely at each
fixed time, but its exceptional null event may depend on time.
[[def-law-modification-and-indistinguishability-of-processes]]

[F5] Continuity at a point sends every convergent sequence in the domain to a
sequence converging to the function value; this forward direction is
choice-free. Real absolute value satisfies the triangle inequality.
[[thm-sequential-criterion-for-continuity]] [[lem-of-triangle-inequality]]

[F6] In the real ordered field, reciprocals of positive integers tend to zero:
given $\varepsilon>0$, the reciprocal Archimedean property supplies a threshold,
and inversion reverses the order on positive elements.
[[cor-archimedean-reciprocal]] [[lem-of-inverse-positive]]

[F7] AC is used by the arbitrary-index Kolmogorov construction in [F1]. No
additional choices are made in the deterministic sequence or the
probability-one intersections below. [[def-axiom-of-choice]]

## Counterexample

**Proof technique:** contradiction.

1.1 Take $I=[0,1]$. For each finite $F\subseteq I$, let $\mu_F$ be the uniform probability on $\{0,1\}^F$. Its mass is $2^{-|F|}$ at every point; for $F=\varnothing$ this is the unique probability on the singleton $\{0,1\}^{\varnothing}$. Marginalizing from $G$ to $F\subseteq G$ sums over $2^{|G\setminus F|}$ extensions and gives $2^{|G\setminus F|}2^{-|G|}=2^{-|F|}$, so the family is consistent. By [F1], under AC it has a probability extension on the cylinder sigma-algebra of $\Omega=\{0,1\}^{[0,1]}$, and $X_t(\omega)=\omega(t)$ is a measurable coordinate process with these finite laws. For a finite $J\subseteq I$ and sets $A_j\subseteq\{0,1\}$, uniform counting gives $$P\!\left(\bigcap_{j\in J}\{X_j\in A_j\}\right)=\frac{\prod_{j\in J}|A_j|}{2^{|J|}}=\prod_{j\in J}P(X_j\in A_j).$$ This also gives $1$ for $J=\varnothing$, by the empty-product convention. Since every subset of $\{0,1\}$ is measurable, [F1] makes the whole coordinate family independent, and each coordinate is a fair bit. [F1, F7, algebra]

1.2 For $n\in\mathbb N$, put $q_n=1/(n+1)$. These are distinct points of $(0,1]$. Given $\varepsilon>0$, [F6] gives a positive integer $N$ with $1/N<\varepsilon$; whenever $n+1\ge N$, positivity and order reversal under inversion give $0<q_n\le1/N<\varepsilon$. Hence $q_n\to0$. [F6]

2.1 Put $A_n=\{X_{q_n}=1\}$. By the independence and fair laws in step 1.1, the events $(A_n)$ are pairwise independent and $P(A_n)=1/2$. For each pair, [F2] also makes their complements $A_n^c=\{X_{q_n}=0\}$ independent, and $P(A_n^c)=1/2$. Both probability series diverge because their first $m$ terms sum to $m/2$. Applying [F2] twice gives probability-one events $$E_1=\{A_n\text{ occurs infinitely often}\},\qquad E_0=\{A_n^c\text{ occurs infinitely often}\}.$$ Thus on $E_0\cap E_1$ the bit sequence $(X_{q_n})$ has infinitely many zeros and infinitely many ones. [step 1.1, F2, algebra]

3.1 Suppose for contradiction that $Y=(Y_t)_{t\in[0,1]}$ is a continuous modification of $X$: for some measurable event $C$ with $P(C)=1$, every path $t\mapsto Y_t(\omega)$ with $\omega\in C$ is continuous on $[0,1]$. By [F4], each $H_n=\{Y_{q_n}=X_{q_n}\}$ is measurable and has probability one. The complement of $H=\bigcap_nH_n$ is the countable union of the null events $H_n^c$, so [F3] gives $P(H)=1$. A finite union bound likewise gives $P(C\cap H\cap E_0\cap E_1)=1$, so this intersection is nonempty. Fix $\omega$ in it. [step 2.1, F3, F4, assume-contra]

4.1 The path $f(t)=Y_t(\omega)$ is continuous at the endpoint $0$. Since $q_n\to0$, the choice-free forward implication in [F5] gives $Y_{q_n}(\omega)\to Y_0(\omega)$. But $\omega\in H\cap E_0\cap E_1$, so $Y_{q_n}(\omega)=X_{q_n}(\omega)$ for every $n$, with both values $0$ and $1$ occurring infinitely often. This sequence cannot converge: if it converged to $a$, its tail would eventually lie within $1/3$ of $a$; a tail containing both $0$ and $1$ would then give $1\le |a|+|1-a|<2/3$, a contradiction. Therefore no such continuous modification $Y$ exists. [step 1.2, step 2.1, step 3.1, F5]

5.1 The witness has consistent finite laws and a genuine cylinder-space Kolmogorov extension, yet lacks a continuous modification, which refutes the statement. The empty finite support was checked in step 1.1; $t=0$ is the continuity endpoint in step 4.1; $t=1=q_0$ and the values $0,1$ occur in the construction; repeated coordinates are handled by the coordinate process rather than treated as independent copies. There is no biconditional. AC is used exactly through the arbitrary-index extension invoked in step 1.1, while Borel--Cantelli, the fixed sequence, and the countable intersection add no choice. [step 1.1, step 4.1, F7, discharge-contradiction] ∎

## Source notes

Durrett, Section 7.1, Theorem 7.1.1 and the discussion immediately following
it, printed p. 356, constructs the canonical process from consistent
finite-dimensional laws and emphasizes that this construction alone does not
supply measurable continuous paths; a separate rational-time continuity
argument is then required. The independent-bit witness and the
Borel--Cantelli proof that even a continuous modification is impossible are
derived in full above.
