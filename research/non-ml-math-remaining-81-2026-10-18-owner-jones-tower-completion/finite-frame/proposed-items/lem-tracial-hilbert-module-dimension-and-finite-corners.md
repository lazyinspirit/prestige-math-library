---
id: lem-tracial-hilbert-module-dimension-and-finite-corners
kind: lemma
title: "Ordinary Hilbert-module dimension and finite projection models"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - lem-tracial-standard-form-and-normal-functional-vectors
  - lem-finite-factor-projection-comparison-and-normalized-trace
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. Zorn supplies maximal orthogonal families and cyclic decompositions. AC supplies the hypotheses of the published functional analytic suppliers; all nonseparable index sets are allowed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
      locator: "Lemma 8.2.1 and Propositions 8.2.2–3 (pp. 123–124; footnote 2 allows arbitrary I), Proposition 8.4.2 (pp. 128–129), Definition 8.5.4 and Proposition 8.6.1 (pp. 133–134). Finite-trace classification is proved locally for arbitrary I."
---

## Statement

Assume AC. For a finite tracial algebra $(N,t)$, every Hilbert space $H$ with a normal
unital right $N$ action, meaning a unital star anti-homomorphism into $B(H)$ that is WOT continuous on bounded balls, is right-unitarily isomorphic to
$P(\ell^2(I)\otimes L^2(N))$, where $I$ is an arbitrary set and
$P\in B(\ell^2(I)) \bar\otimes N$ is a projection. Its bounded right-linear operator
algebra is the corner $P(B(\ell^2(I)) \bar\otimes N)P$. The formula
$\operatorname{Tr}_N(T)=\sum _i t(T_{ii})$ for positive $T$ defines a faithful normal
semifinite trace on the ambient algebra and its corner. Transport to $H$
is independent of the model; its value at the identity defines $\dim_N H$.
If $N$ is a II1 factor and this dimension is finite, $H$ is isomorphic to
$p L^2(N)^k$ for some finite $k$ and $p\in M_k(N)$, with
$\dim_N H=(\operatorname{Tr}_k\otimes t)(p)$.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC permits Zorn maximality and implies Countable Choice and the ultrafilter lemma required by the Hilbert and compactness suppliers. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] For finite tracial algebras, the left and right standard actions are mutual commutants; right-bounded vectors of the standard module are bounded algebra elements. Positive normal functionals are vector functionals, and each unital von Neumann subalgebra has a unique faithful normal trace-preserving bimodule expectation. ([[lem-tracial-standard-form-and-normal-functional-vectors]])

[F5] In a factor projections are comparable; for finite-trace projections, trace inequalities characterize subequivalence. Diffuse factor corners are diffuse factors; diffuse finite factors have a unique normalized trace. ([[lem-finite-factor-projection-comparison-and-normalized-trace]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 Choose a maximal orthogonal family of nonzero cyclic right submodules of $H$, using Zorn; their direct sum exhausts $H$, since its orthogonal complement is reducing and a nonzero vector there generates another one. For a cyclic module with generator $\eta $, its vector functional on $N^{\mathrm{op}}$ is positive normal. [[lem-tracial-standard-form-and-normal-functional-vectors]] gives a vector $\xi \in L^2(N)$ with the same functional. The map $\eta n\mapsto \xi n$ is isometric (the squared norms coincide on $nn^*$), and extends to a right-module unitary onto the closure of $\xi N$. That closure is reducing, so its projection commutes with right $N$; by [[lem-tracial-standard-form-and-normal-functional-vectors]] it is a projection in left $N$. Taking the direct sum gives a diagonal projection model over the arbitrary index set $I$. [F1, F2, F3, F4, F5, given]

2.1 For an arbitrary projection model, the commutant of the right action is precisely the corner claimed: each matrix entry commutes with the right regular action, hence belongs to left $N$ by [[lem-tracial-standard-form-and-normal-functional-vectors]]; conversely any bounded matrix with these entries commutes with it. Passing to a reducing range compresses this commutant. This is also a concrete construction of the tensor product notation used in the statement. [F1, F2, F3, F4, F5, step 1.1]

3.1 On positive matrices put $\operatorname{Tr}_N(T)=\sup_{F\subseteq I,\ F\text{ finite}} \sum _{i\in F}t(T_{ii})$. Additivity follows by interchanging two directed suprema, faithfulness because zero diagonal positive entries force zero off-diagonal entries by positivity of every two-by-two compression, and normality follows by interchanging the supremum over finite $F$ with an increasing operator net. For a bounded matrix $S$, $\operatorname{Tr}_N(S^*S)=\sum _{i,j}t(S_{ji}^*S_{ji})=\sum _{i,j}t(S_{ji} S_{ji}^*)=\operatorname{Tr}_N(SS^*)$; strong convergence of finite coordinate sums and normality justify the nonnegative sums. This establishes the trace property. Semifiniteness: with coordinate projection $f_F$, the positive elements $T^{1/2}f_F T^{1/2}\le T$ increase strongly to $T$ and have finite trace at most $\|T\| |F|$. For a corner, compress these approximants by $P$, or apply the same calculation to $T\in PAP$; they remain below $T$ and have finite trace. Thus the corner trace is semifinite as well. Normality of this potentially infinite weight means preservation of bounded increasing positive nets. On a corner of finite total trace the diagonal sum is a norm-convergent sum of vector functionals: after inserting the corner projection, the sum of their norms is exactly the finite total trace. Thus its finite trace is also WOT continuous on bounded balls, in the convention of [F3]. [F1, F2, F3, F4, F5, step 2.1]

4.1 If $U$ is a right-module unitary between two models, its zero extension to the two ambient amplifications is a rectangular partial isometry with entries in $N$. In the amplification by the disjoint union of their index sets, the trace identity $\operatorname{Tr}_N(S^*S)=\operatorname{Tr}_N(SS^*)$, applied to $S=U T^{1/2}$, shows equality of transported traces for every positive corner element $T$. This proves independence and also invariance of dimension. For a bounded right-linear $V:L^2(N)\to H$, the same rectangular computation gives $\operatorname{Tr}_H(VV^*)=t(V^*V)$; this identity in particular normalizes the trace of a standard embedded copy of $L^2(N)$ to one. [F1, F2, F3, F4, F5, step 3.1]

5.1 Now suppose $N$ is a II1 factor and $\operatorname{Tr}_N(P)=\lambda <\infty $. The ambient amplification is a factor: its center can be computed with coordinate matrix units and entries in $N$, exactly as for finite matrices. Enlarge $I$ by finitely many unused coordinates if necessary, and take a finite coordinate projection $f$ of trace $k\ge \lambda $ (take $k>\lambda $ to avoid an endpoint). The same maximal-partial-isometry comparison proof in [[lem-finite-factor-projection-comparison-and-normalized-trace]] applies in this semifinite factor. In the case of finite-trace projections, trace comparison is valid by that proof, without any separability. Consequently $P\precsim f$, giving $v^*v=P$, $vv^*=p\le f$. Multiplication by $v$ is the required right-module unitary and preserves the trace. Since $fAf\cong M_k(N)$, this is the asserted finite model. The case $\lambda =0$ gives $H=0$ by faithfulness. The nonzero corners used here are diffuse factors by the proof in [[lem-finite-factor-projection-comparison-and-normalized-trace]], which applies to this amplification too: a minimal projection would link to a coordinate corner and contradict the diffuseness of $N$. [F1, F2, F3, F4, F5, step 4.1] ∎
