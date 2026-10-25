---
id: prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy
kind: proposition
title: Fixed-order integration-by-parts and leading-equation field-redefinition relations
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
  - def-aqft-local-operator-and-dimension
  - def-aqft-operator-basis-quotient
  - lem-aqft-invariant-quotient-exactness
  - def-axiom-of-choice
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
  lem-aqft-invariant-quotient-exactness: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics (2004 TASI Lectures)"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Assume full AC. Use four-dimensional natural units $c=\hbar=1$ and a finite jet-polynomial field model with its declared finite rational action of a complex reductive affine algebraic group $G$. Let $W_D$ be a finite raw local-polynomial space at fixed engineering weight $D$, derivative cutoff, and field-degree cutoff; let $V_D=W_D^G$. Let $\widetilde R_D$ be the $G$-stable linear span in $W_D$ of the declared polynomial identities, admitted total-divergence densities, and leading-equation densities $F^a\mathcal E_a^{(0)}$ defined below, with $R_D=\widetilde R_D\cap V_D$. The finite-order invariant operator quotient is $\mathcal Q_D=V_D/R_D$.

Let $M=\mathbb R^{1,3}$ with $x^0=ct$, $\eta=\operatorname{diag}(-1,1,1,1)$, and volume measure $d^4x$. Even field components are smooth maps $M\to\Phi_a^{\bar0}$ and odd components are smooth coefficient families in a fixed Grassmann algebra valued in $\Phi_a^{\bar1}$; admitted variations and currents have compact support. Let $\mathcal I[L]=\int_M L\,d^4x$ on admitted local densities, with the boundary convention $\mathcal I(\partial_\mu J^\mu)=0$. Let $S_0[\phi]$ and each $S_j[\phi]$ be $G$-invariant local polynomial functionals of these field configurations, so their formal Taylor expansions through order $N$ are defined. Let the variational derivative $\mathcal E_a^{(0)}[\phi]$ of $S_0$ be defined by

$$
D S_0[\phi](h)=\mathcal I\!\left(\sum_a h^a\mathcal E_a^{(0)}[\phi]\right)
$$

for every admitted compactly supported parity-compatible variation $h$. A leading-equation relation is a density $F^a\mathcal E_a^{(0)}$ with $F^a[\phi]$ a smooth function of $x$ and finitely many component jets of $\phi$ at $x$, with this density in $W_D$, and satisfying the following conditions: its component parity matches that of $\phi^a$; it is $G$-equivariant, meaning $F[g\cdot\phi]=g\cdot F[\phi]$; and it preserves compact support, meaning $\operatorname{supp}F[\phi]\subseteq\operatorname{supp}\phi$ for compactly supported $\phi$. At each configuration where the action identities below are applied, require $F[\phi]$ itself to be an admitted compactly supported variation, so the stated first-variation identity applies to this direction. An integration-by-parts relation is a density $\partial_\mu J^\mu$ satisfying the stated boundary convention. Consider a finite formal action $S_\epsilon=S_0+\sum_{j=1}^N\epsilon^jS_j$ in the ring $\mathbb C[\epsilon]/(\epsilon^{N+1})$, where $\epsilon$ is dimensionless and each $\epsilon^kF^a$ has the units of $\phi^a$. For every $1\leq k\leq N$, the local identity-leading change of variables $\Psi_k(\phi)=\phi-\epsilon^kF[\phi]$ is invertible as a formal map through order $N$ and satisfies

$$
S_\epsilon[\Psi_k(\phi)]=S_\epsilon[\phi]-\epsilon^k\mathcal I\!\left(F^a\mathcal E_a^{(0)}[\phi]\right)+O(\epsilon^{k+1}).
$$

Thus a coefficient $+\epsilon^k\mathcal I(F^a\mathcal E_a^{(0)})$ can be removed at order $k$ without changing lower-order coefficients, provided all induced terms through the retained order are kept. The quotient $\mathcal Q_D$ identifies exactly the declared polynomial, boundary, and leading-equation relation span; it asserts no equivalence of arbitrary off-shell Green functions and does not by itself assert a quantum measure or amplitude equivalence.

## Statement references

[[def-aqft-local-operator-and-dimension|Finite-jet local operators and engineering dimension]]

[[def-aqft-operator-basis-quotient|Finite-order invariant operator-basis quotient]]

[[lem-aqft-invariant-quotient-exactness|Exactness of invariant vectors for a finite-dimensional quotient]]

[Burgess, §2.1, equations (21)–(26), and §2.2](https://arxiv.org/pdf/hep-th/0701053)

[Neubert, §2, equations (27)–(29)](https://arxiv.org/pdf/hep-ph/0512222)

[Criado–Pérez-Victoria, §§3 and 5.1](https://arxiv.org/pdf/1811.09413)

## Facts & Assumptions

**Given:** Full AC; the finite field and jet data; a finite-dimensional rational $G$-module $W_D$ with $G$-stable relation subspace $\widetilde R_D$; a compact-support/no-boundary action functional $\mathcal I$; $G$-invariant local polynomial actions $S_0,S_1,\ldots,S_N$ with the stated variational-derivative convention; and a finite formal truncation $\epsilon^{N+1}=0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is explicitly part of the hypothesis of the invariant-quotient lemma used below.

[F1] [[def-aqft-local-operator-and-dimension]]: the operator module is a finite complex supercommutative polynomial module on a finite jet representation, with fixed derivative/field cutoffs and a declared rational $G$-action.

[F2] [[def-aqft-operator-basis-quotient]]: for $V_D=W_D^G$ and $R_D=\widetilde R_D\cap V_D$, the exact declared operator quotient is $\mathcal Q_D=V_D/R_D$.

[F3] [[lem-aqft-invariant-quotient-exactness]]: for finite-dimensional rational $G$-module $W_D$ and $G$-stable $\widetilde R_D$, the canonical map $W_D^G/(W_D^G\cap\widetilde R_D)\to(W_D/\widetilde R_D)^G$ is an isomorphism under AC and complex reductivity.

[A2] Boundary convention: every admitted current $J^\mu$ has compact support in $M=\mathbb R^{1,3}$, and $\mathcal I(\partial_\mu J^\mu)=0$.

[A3] Variational convention: $\mathcal E_a^{(0)}$ is the left Euler derivative for odd fields and the ordinary Euler derivative for even fields, characterized by the displayed first-variation identity for every admitted $h$.

[A4] Formal-map convention: $\epsilon^{N+1}=0$, each $F^a$ is smooth in $x$ and finitely many field jets, has the stated parity, equivariance, and support properties, $F[\phi]$ is an admitted compactly supported variation at each configuration considered, and $\Psi_k=\operatorname{id}-\epsilon^kF$ is considered through order $N$ using its finite Taylor expansion in $\epsilon$.

## Proof

1.1 The quotient map $W_D\to W_D/\widetilde R_D$ is equivariant because $\widetilde R_D$ is $G$-stable. By F1 its source is a finite-dimensional rational module, so under A1 we can apply F3 and conclude that its restriction to invariants is surjective. [given, A1, F1, F3]

1.2 An admitted integration-by-parts density is $\partial_\mu J^\mu$ with compactly supported $J^\mu$. Its action integral is zero by A2, so adding such a density does not change the action functional under the stated boundary convention. [given, A2]

1.3 By A3 and the admissibility condition in A4, the first variation of $S_0$ in direction $-\epsilon^kF$ is $-\epsilon^k\mathcal I(F^a\mathcal E_a^{(0)})$. The formal Taylor terms of degree at least two in the displacement have powers at least $\epsilon^{2k}$, which are in $O(\epsilon^{k+1})$ because $k\geq1$. [given, A3, A4, algebra]

1.4 To construct a formal inverse through order $N$, use A4 and seek $\Phi_k=\operatorname{id}+\sum_{m=k}^N\epsilon^mH_m$. Because $F$ is smooth in finitely many jet coordinates, each coefficient of $F(\Phi_k(\phi))$ through order $N$ is defined by a finite Taylor expansion. At order $k$, the coefficient of $\Psi_k\circ\Phi_k-\operatorname{id}$ is $H_k-F$, so choose $H_k=F$. At each subsequent order $m$, that coefficient is $H_m$ plus an expression determined by the previously chosen $H_k,\ldots,H_{m-1}$; choosing $H_m$ as its negative cancels it. The recursion is finite, and every coefficient depends on finitely many jets, so it yields a local right inverse modulo $\epsilon^{N+1}$. The same recursion gives a left inverse, and a left and right inverse of one map agree; thus $\Psi_k$ is formally invertible. [given, A4, construct, algebra]

2.1 The kernel of the restricted invariant map is $W_D^G\cap\widetilde R_D=R_D$. By F2, its domain modulo this kernel is exactly $\mathcal Q_D$, so the first isomorphism theorem gives the canonical isomorphism $\mathcal Q_D\cong(W_D/\widetilde R_D)^G$ and fixes the quotient's declared relation scope. [given, F2, step 1.1, algebra]

2.2 For each $j\geq1$, substituting $\phi-\epsilon^kF$ into $\epsilon^jS_j$ changes it first at degree $\epsilon^{j+k}$, at least $\epsilon^{k+1}$. Combining this with step 1.3 gives the displayed expansion for $S_\epsilon\circ\Psi_k$. [given, step 1.3, algebra]

3.1 If the order-$k$ action contains $+\epsilon^k\mathcal I(F^a\mathcal E_a^{(0)})$, the negative term in step 2.2 cancels it, while the substitutions in all $S_j$ with $j\geq1$ begin above order $k$. Step 1.4 makes this an allowed invertible local field redefinition; its induced higher-order terms remain part of the transformed truncated action. No off-shell or quantum-measure conclusion follows from this action-level calculation. [given, step 2.2, step 1.4, F2] ∎
