---
id: lem-finite-index-bounded-vector-pull-down
kind: lemma
title: "Finite Jones index gives bounded vector pull-down"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - lem-tracial-standard-form-and-normal-functional-vectors
  - lem-finite-factor-projection-comparison-and-normalized-trace
  - lem-tracial-hilbert-module-dimension-and-finite-corners
  - def-extremal-finite-index-ii1-subfactor-data
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - thm-banach-alaoglu
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
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
      locator: "Proposition 9.4.2 (pp. 147–148), Proposition 9.4.5 and Corollary 9.4.6 (p. 149), complete proofs read. Local proof includes bounded approximation in the pull-down step."
---

## Statement

Assume AC. Let $N\subseteq M$ be II1 factors and let $H=L^2(M,\tau )$. Define ordinary Jones
index by $\lambda =\dim_N H<\infty $ using [[lem-tracial-hilbert-module-dimension-and-finite-corners]]. Let $e$ be the orthogonal
projection onto $L^2(N)$. Then
$B=(\text{right }N)'=W^*(M,e)$ is a II1 factor with canonical unnormalized trace
$\operatorname{Tr}_B(1)=\lambda $, $\operatorname{Tr}_B(e)=1$,
$\operatorname{Tr}_B(xey)=\tau (yx)$, and $\operatorname{Tr}_B|_M=\lambda \tau $.
Its normalized trace-preserving expectation $F:B\to M$ satisfies
$F(xey)=\lambda ^{-1} xy$. Every $T\in B$ has a unique bounded $x\in M$ such that
$Te=xe$; necessarily $x=\lambda F(Te)$. In particular every right-$N$ bounded
vector in $H$ is represented by an element of $M$.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC permits Zorn maximality and implies Countable Choice and the ultrafilter lemma required by the Hilbert and compactness suppliers. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] For finite tracial algebras, the left and right standard actions are mutual commutants; right-bounded vectors of the standard module are bounded algebra elements. Positive normal functionals are vector functionals, and each unital von Neumann subalgebra has a unique faithful normal trace-preserving bimodule expectation. ([[lem-tracial-standard-form-and-normal-functional-vectors]])

[F5] In a factor projections are comparable; for finite-trace projections, trace inequalities characterize subequivalence. Diffuse factor corners are diffuse factors; diffuse finite factors have a unique normalized trace. ([[lem-finite-factor-projection-comparison-and-normalized-trace]])

[F6] Every normal Hilbert-space right module has an arbitrary-index projection model with invariant canonical trace. Finite dimension over a II1 factor yields a finite matrix projection model; the trace of VV* equals the base trace of V*V for right-linear maps from the standard module. ([[lem-tracial-hilbert-module-dimension-and-finite-corners]])

[F7] The ordinary-index contract supplies a unital II1 subfactor inclusion $N\subseteq M$, with $\lambda=\dim_N L^2(M)<\infty$. Extremality is unused in this lemma; the module model is derived in the proof. ([[def-extremal-finite-index-ii1-subfactor-data]])

[F8] Under AC, for every nondegenerate concrete C*-algebra D, the unit ball of D is strongly dense in that of D double commutant; its self-adjoint part is strongly dense in the self-adjoint part. Only clause 1 is used. ([[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]])

[F9] Assuming the ultrafilter lemma, the dual unit ball of every real or complex normed space is weak-star compact. AC supplies that hypothesis. We apply it to bounded forms, or to the trace-class predual after proving that identification. ([[thm-banach-alaoglu]])

[F10] Under AC, the WOT-generated unital star-algebra is its bicommutant; for every set S, W*(S) equals S double commutant after adjoining adjoints and the identity. ([[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 [[lem-tracial-standard-form-and-normal-functional-vectors]] produces $E_N$. Orthogonal projection gives $exe=E_N(x)e$ directly on the dense subspace $M$, and $Je=eJ$ since $L^2(N)$ is invariant under the conjugation $J$. If an element of $M'$ commutes with $e$, [[lem-tracial-standard-form-and-normal-functional-vectors]] writes it as $R_a$, $a\in M$; applying the commutation equation to $1$ says $a=E_N(a)\in N$. Conversely right $N$ commutes with both $M$ and $e$. Bicommutants therefore give $W^*(M,e)=(R(N))'=B$. [[lem-tracial-hilbert-module-dimension-and-finite-corners]] makes this a finite-trace factor; it is diffuse because it has the diffuse corner $eBe=N e$, or by its finite matrix corner model. To verify the corner assertion independently, restriction of $T\in eBe$ to $L^2(N)$ commutes with right $N$, so is left multiplication by some $n\in N$ by [[lem-tracial-standard-form-and-normal-functional-vectors]]. Hence $T=ne$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, given]

2.1 Let $V_x:L^2(N)\to H$ be $n\mapsto xn$. Then $V_x V_y^*=xey^*$ and $V_y^*V_x=E_N(y^*x)$ as a left multiplier on $L^2(N)$. The rectangular trace calculation from [[lem-tracial-hilbert-module-dimension-and-finite-corners]] gives $\operatorname{Tr}_B(xey)=\tau (yx)$ by polarization. In particular $\operatorname{Tr}_B(e)=1$. Its normalized restriction $\lambda ^{-1} \operatorname{Tr}_B|_M$ is a tracial state, hence equals $\tau $ by [[lem-finite-factor-projection-comparison-and-normalized-trace]]. [[lem-tracial-standard-form-and-normal-functional-vectors]] applied to the finite tracial algebra $(B,\lambda ^{-1} \operatorname{Tr}_B)$ gives the expectation $F$. For $a\in M$, $\lambda \tau (aF(e))=\operatorname{Tr}_B(ae)=\tau (a)$. Nondegeneracy of the trace pairing gives $F(e)=\lambda ^{-1} 1$, and bimodularity gives the displayed formula for $F(xey)$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 1.1]

3.1 The *-algebra $A_0=\operatorname{span} MeM$ is strongly dense in $B$. One way to see this with no frame assumption is that its WOT closure is a two-sided ideal of $B$ and contains $e$. Finite trace comparison gives finitely many orthogonal projections summing to $1$, each subequivalent to $e$: remove copies of $e$ while the remainder has trace greater than $1$, then embed the last remainder in $e$. If $v_j$ are the resulting partial isometries, $1=\sum_jv_j e v_j^*$ belongs to this ideal, so the ideal is all of $B$. Applying [F8] to the nondegenerate C*-closure of $A_0$ gives, for each $T\in B$, a net $a_i\in A_0$ converging strongly to $T$ with a common operator bound (apply it first to the C*-closure of $A_0$, then approximate each resulting bounded element in norm by $A_0$, allowing a fixed arbitrarily small bound slack). Writing $a_i=\sum  x_r e y_r$ gives $a_i e=x_i e$, where $x_i=\sum  x_r E_N(y_r)\in M$. The expectation formula shows $x_i=\lambda F(a_i e)$ and $\|x_i\|\le \lambda \|a_i\|$. A bounded subnet has an ultraweak limit $x\in M$; the matrix coefficients of left multiplication on $L^2(M)$ are normal, so $x_i e\to xe$ weakly. But $a_i e\to Te$ strongly, thus $Te=xe$. Applying $F$ to this identity gives $x=\lambda F(Te)$; uniqueness also follows by applying $xe$ to $1$. This proof does not silently pass an unbounded inverse through a weak limit. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 2.1]

4.1 If $\xi $ is right-$N$ bounded, its bounded map $V_\xi :L^2(N)\to H$ extends by zero on $L^2(N)^\perp$ to $T=V_\xi  e\in B$. Pull-down gives $T=xe$, so $\xi =T1=x$. This proves equality of the right-$N$ bounded vectors and $M$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 3.1] ∎
