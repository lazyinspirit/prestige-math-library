---
id: lem-finite-order-smooth-line-bundles-have-torsion-reduced-bundle-class
kind: lemma
title: Finite-order smooth line bundles have torsion reduced bundle class
status: draft
origin: session
deps: [def-axiom-of-choice]
proof_strategy: direct
axiom_use: "The standing AC convention is allowed. The construction below uses only finite bundle charts, smooth Euclidean bumps, finite direct sums, exterior powers and integer identities; it introduces no infinite basis or classification choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Michael Atiyah, K-Theory
      locator: "Grothendieck group of vector bundles, tensor products and exterior powers; the finite nilpotence and torsion calculation needed here is proved in full rather than imported."
---

## Statement

Let $X$ be a compact smooth manifold and $L\to X$ a smooth complex line bundle with a specified isomorphism $L^{\otimes d}\cong\mathbf1$ for a positive integer $d$. Let $K^0_{\mathrm{sm}}(X)$ denote the Grothendieck ring of finite-rank smooth complex vector bundles, with direct sum as addition, tensor product as multiplication and the trivial complex line as unit. Then $[L]-1$ is torsion in its additive group. Explicitly, a finite construction gives an integer $m\ge1$ for which
$$(1-[L])^m=0,\qquad d^{m-1}([L]-1)=0.$$
Consequently every additive homomorphism $I:K^0_{\mathrm{sm}}(X)\to\mathbb Z$ satisfies $I([L])=I(1)$. No stable triviality of $L$, rational characteristic-class formula or index theorem is assumed.

## Facts & Assumptions

**Given:** The compact smooth base, smooth line bundle and specified finite tensor-order isomorphism. The standing full AC convention may be retained. [[def-axiom-of-choice]]

[F1] Here the Grothendieck group is defined explicitly using pairs $(E,F)$ of finite-rank smooth complex bundles: $(E,F)$ and $(E',F')$ are equivalent when $E\oplus F'\oplus H\cong E'\oplus F\oplus H$ for some finite-rank smooth bundle $H$. Addition uses direct sums and multiplication uses $(E,F)(E',F')=(E\otimes E'\oplus F\otimes F',E\otimes F'\oplus F\otimes E')$. Bundle distributivity and the tensor flip make this a commutative ring; transitivity follows by adding the two witnessing isomorphisms and including their repeated middle summand in $H$. These formulas are part of the construction, not a claim of cancellation of actual bundles.

## Proof

1.1 Choose finitely many line-bundle trivializing charts with smaller precompact subcharts covering $X$. In each larger chart choose a smooth nonnegative Euclidean bump $\rho_i$, supported inside it and positive on the smaller closure. Their sum is positive, so divide by the sum to make $\sum_i\rho_i=1$. A local nonzero frame $v_i$ defines a global smooth section $s_i=\rho_i v_i$ by zero extension; the support is strictly inside its frame chart. At every point some $s_i$ is nonzero. Thus $s=(s_1,\ldots,s_m)$ is a nowherezero section of $L^{\oplus m}$. A Hermitian metric on $L$ is constructed by the same finite positive weighted sum of local squared frame norms, which is positive on every nonzero fiber vector. Normalize $s$ in the induced direct-sum metric. Its span is a trivial smooth line subbundle, and the smooth orthogonal projection $u\mapsto\langle u,s\rangle s$ exhibits a smooth complementary bundle $Q$ (in a local frame, extend the nonzero vector to a frame using a nonzero coordinate minor). Hence $L^{\oplus m}\cong\mathbf1\oplus Q$. For empty $X$ take $m=1$ and the zero bundle ring. [given, F1, construct]

2.1 For actual bundles define $\lambda_{-1}(E)=\sum_{k=0}^{\operatorname{rank}E}(-1)^k[\bigwedge^kE]$, componentwise if necessary. The fiberwise map which wedges an $i$-fold wedge from $E$ before a $j$-fold wedge from $F$ gives the smooth isomorphism $\bigwedge^k(E\oplus F)\cong\bigoplus_{i+j=k}\bigwedge^iE\otimes\bigwedge^jF$. Local basis wedges prove bijectivity and respect transitions, so finite distributivity gives $\lambda_{-1}(E\oplus F)=\lambda_{-1}(E)\lambda_{-1}(F)$. For a line $\lambda_{-1}(L)=1-[L]$ and $\lambda_{-1}(\mathbf1)=0$. Apply this actual-bundle identity to step1.1 to obtain $(1-[L])^m=\lambda_{-1}(L^{\oplus m})=\lambda_{-1}(\mathbf1\oplus Q)=0$. No exterior-power operation on virtual differences or splitting principle is used. [F1, step 1.1, algebra]

3.1 Put $x=[L]-1$ in the commutative ring of [F1]. The given tensor-power isomorphism implies $(1+x)^d=1$. Expanding the finite binomial gives $dx=-x^2q(x)$, where $q(x)=\sum_{j=2}^d\binom djx^{j-2}$ (zero if $d=1$). Induction then gives $d^k x=(-1)^k x^{k+1}q(x)^k$ for every nonnegative integer $k$: multiply the preceding identity by $d$ and substitute $dx=-x^2q(x)$, using commutativity. Step2.1 says $x^m=0$, so taking $k=m-1$ gives $d^{m-1}x=0$, including $m=1$. This is an actual integer annihilator, not just a rational equality. [F1, step 2.1, given, algebra]

4.1 Applying an additive $I$ to step3.1 gives $d^{m-1}(I([L])-I(1))=0$ in $\mathbb Z$. The coefficient is a positive integer, so the difference is zero. All charts, sections, bundle splittings, powers and sums used above were finite; no triangulation, classification of line bundles, Chern character or infinite-dimensional operator argument entered the assertion. [step 3.1, algebra] ∎
