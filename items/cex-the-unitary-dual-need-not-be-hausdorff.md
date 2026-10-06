---
id: cex-the-unitary-dual-need-not-be-hausdorff
kind: counterexample
title: The unitary dual need not be Hausdorff
deps:
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - def-external-semidirect-product
  - def-topological-group
  - def-standard-topologies
  - def-second-countable-space
  - def-locally-compact-space
  - def-product-topology
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - thm-dominated-convergence
  - lem-operators-commuting-with-a-point-separating-family-of-multiplications-are-multiplications
  - def-measure-preserving-transformation-and-system
  - def-ergodic-measure-preserving-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-strongly-continuous-unitary-representation
  - def-matrix-coefficient-of-a-unitary-representation
  - def-weak-containment-of-unitary-representations
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - def-interior-closure-boundary-top
  - def-hausdorff-space
  - def-axiom-of-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the multiplication and Fell suppliers; the explicit affine-group representation, its coefficient estimates and the ergodicity verification use no further choice."
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: Definition 1.C.5 and Proposition 1.C.6 (Fell topology); the explicit positive affine-group witness is proved locally"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.2: Definition F.2.1 and Proposition F.2.2 (Fell topology); the explicit affine-group witness is proved locally"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. There is a second-countable locally compact
Hausdorff group whose unitary dual, with the Fell topology, is not Hausdorff.
Explicitly let
$$G=\mathbb R_{>0}\ltimes\mathbb R,\qquad (a,b)(a',b')=(aa',\,b+ab'),$$
the affine group of the line with the product topology
([[def-external-semidirect-product]], [[def-product-topology]]), and let $\pi$
be the representation on $L^2(\mathbb R)$
$$(\pi(a,b)\eta)(u)=e^{ibe^u}\eta(u+\log a).$$
Then:

1. $\pi$ is a strongly continuous irreducible unitary representation and
   $\pi\not\simeq1_G$ (it has infinite-dimensional carrier);
2. every continuous unitary character $\chi_t(a,b)=a^{it}$ ($t\in\mathbb R$)
   lies in the Fell closure of the singleton $\{[\pi]\}$
   ([[def-fell-topology-on-the-unitary-dual]]), and so in particular does the
   trivial character $1_G=\chi_0$;
3. hence $\{[\pi]\}$ is not closed and $\widehat G$ is not a Hausdorff space
   ([[def-unitary-dual-of-a-locally-compact-group]],
   [[def-hausdorff-space]]).

## Facts & Assumptions

**Given:** AC; the affine group $G$; the representation $\pi$ on $L^2(\mathbb R)$; the characters $\chi_t(a,b)=a^{it}$.

[F1] $G=\mathbb R_{>0}\ltimes\mathbb R$ with the product topology is a second-countable locally compact Hausdorff group, with $(a,b)^{-1}=(a^{-1},-b/a)$; $\mathbb R_{>0}$ and $\mathbb R$ are second-countable and locally compact ([[def-external-semidirect-product]], [[def-topological-group]], [[def-standard-topologies]], [[def-second-countable-space]], [[def-locally-compact-space]], [[def-product-topology]]).

[F2] $L^2(\mathbb R)$ with Lebesgue measure is a complex Hilbert space, translations are unitary and multiplication by a measurable function of modulus one is unitary ([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F3] Translations are strongly continuous on $L^1(\mathbb R)$ and $L^2(\mathbb R)$, and dominated convergence applies to pointwise convergent sequences with an integrable dominating function ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]], [[thm-dominated-convergence]]).

[F4] Multiplication lemma: for a $\sigma$-finite measure space $(X,\Sigma,\mu)$, if a bounded operator $T$ on $L^2(X)$ commutes with $M_h$ for every member of a family $\mathcal F$ of bounded real measurable functions whose generated $\sigma$-algebra completes to $\Sigma$, then $T=M_m$ for some bounded measurable $m$; if $T$ moreover commutes with the unitaries $U_Sf=f\circ S^{-1}$ of an ergodic family of measure-preserving transformations, then $m$ is constant a.e. ([[lem-operators-commuting-with-a-point-separating-family-of-multiplications-are-multiplications]], [[def-measure-preserving-transformation-and-system]], [[def-ergodic-measure-preserving-system]]).

[F5] Tonelli's theorem applies to nonnegative product-measurable functions on $\sigma$-finite spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). Every Lebesgue measurable set has a Borel representative modulo a null set ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]).

[F6] For a closed subspace $M$ of a Hilbert space, $H=M\oplus M^\perp$ and the orthogonal projection $P_M$ is linear, self-adjoint and contractive with range $M$; a closed subspace is $\pi(G)$-invariant exactly when its orthogonal projection commutes with every $\pi(g)$, because unitarity makes $M^\perp$ invariant as well ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]], [[def-strongly-continuous-unitary-representation]]).

[F7] Coefficients: for a one-dimensional representation $\chi$ the diagonal coefficient at $z\in\mathbb C$ is $|z|^2\chi$, and unitary equivalence preserves the Hilbert-space dimension; irreducibility is the absence of nontrivial closed invariant subspaces ([[def-matrix-coefficient-of-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]]).

[F8] For real $x$ one has $|e^{ix}-1|\le|x|$, and Lebesgue measure is translation invariant, so an interval of length $R/2$ intersected with its translate by $h$ has measure $R/2-|h|$ when $|h|\le R/2$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F9] Weak containment: $\chi_t\prec\pi$ when every function of positive type associated to $\chi_t$ is a compact-uniform limit of finite sums of functions of positive type associated to $\pi$ ([[def-weak-containment-of-unitary-representations]]).

[F10] For irreducible classes, $\rho$ lies in the Fell closure of the singleton $\{[\pi]\}$ exactly when $\rho\prec\pi$ ([[lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure]], [[def-fell-topology-on-the-unitary-dual]]).

[F11] Closure and Hausdorffness: a point lies in the closure of a set exactly when every neighbourhood of the point meets the set; a Hausdorff space separates distinct points by disjoint open sets ([[def-interior-closure-boundary-top]], [[def-hausdorff-space]]).

## Counterexample

**Proof technique:** direct.

**Given:** AC, the affine group $G=\mathbb R_{>0}\ltimes\mathbb R$ and the representation $\pi$ of the statement.

1.1 $G$ is a second-countable locally compact Hausdorff group: the product $\mathbb R_{>0}\times\mathbb R$ is second-countable and locally compact, the multiplication $(a,b)(a',b')=(aa',b+ab')$ and the inverse $(a,b)^{-1}=(a^{-1},-b/a)$ are continuous, so $G$ is a topological group. [F1]

1.2 $\pi$ is a unitary representation. Each $\pi(a,b)$ is the composition of the translation $\eta\mapsto\eta(\cdot+\log a)$ and the multiplication by the modulus-one function $u\mapsto e^{ibe^u}$, hence unitary by [F2]; and $\pi(a,b)\pi(a',b')\eta(u)=e^{ibe^u}e^{ib'e^{u+\log a}}\eta(u+\log a+\log a')=e^{i(b+ab')e^u}\eta(u+\log(aa'))=\pi(aa',b+ab')\eta(u)$ by $e^{u+\log a}=ae^u$. [F2]

1.3 $\pi$ is strongly continuous. Write $\tau_h\eta(u)=\eta(u+h)$ and $M_b\eta(u)=e^{ibe^u}\eta(u)$. Since $M_b$ is unitary, $\|\pi(a,b)\eta-\pi(a_0,b_0)\eta\|\le\|\tau_{\log a}\eta-\tau_{\log a_0}\eta\|+\|(M_b-M_{b_0})\tau_{\log a_0}\eta\|$. The first term tends to zero by continuity of translations. In the second, the vector is fixed, the multiplier converges pointwise as $b\to b_0$, and its squared modulus is bounded by $4|\tau_{\log a_0}\eta|^2\in L^1$. Dominated convergence gives the second limit; its sequential form suffices because the parameter space is metrizable. [F2, F3]

1.4 Every bounded operator commuting with $\pi$ is a multiplication $M_m$. For $n\ge1$, $\pi(1,\pm1/n)$ is multiplication by $e^{\pm ie^u/n}$, so a commuting $T$ commutes with their real and imaginary parts, the multiplications $M_{\varphi_n}$, $M_{\psi_n}$ for $\varphi_n(u)=\cos(e^u/n)$ and $\psi_n(u)=\sin(e^u/n)$. The family $\mathcal F=\{\varphi_n,\psi_n:n\ge1\}$ consists of bounded real Borel functions with $\sigma(\mathcal F)=$ Borel: indeed $n\sin(e^u/n)\to e^u$ pointwise, so $e^u$, hence $u=\log e^u$, is $\sigma(\mathcal F)$-measurable, and the sets $\{u\le c\}$ generate the Borel $\sigma$-algebra. By [F4], $T=M_m$ for some bounded measurable $m$. [F2, F4]

1.5 Coefficient estimate. For $t\in\mathbb R$ and $R>0$ put $I_R=[-R,-R/2]$ and $\eta_R:=(R/2)^{-1/2}e^{itu}\mathbf 1_{I_R}$, a unit vector of $L^2(\mathbb R)$. For $(a,b)\in G$ with $h:=\log a$, the change of variable $u\mapsto u+h$ and $|e^{it(u+h)}|=1$ give $\langle\pi(a,b)\eta_R,\eta_R\rangle=(2/R)\int_{I_R\cap(I_R-h)}e^{ibe^u}e^{ith}\,du=a^{it}(2/R)\int_{I_R\cap(I_R-h)}e^{ibe^u}\,du$. If $|h|\le R/2$, the intersection has measure $R/2-|h|$ by [F8], and $|e^{ibe^u}-1|\le\min(2,|b|e^{-R/2})$ on $I_R$ because $u\le-R/2$ there; therefore $\bigl|\langle\pi(a,b)\eta_R,\eta_R\rangle-\chi_t(a,b)\bigr|\le(2/R)\int_{I_R\cap(I_R-h)}|e^{ibe^u}-1|\,du+2|h|/R\le 2|h|/R+|b|e^{-R/2}$. [F8]

2.1 The operator $M_m$ commutes with all translations $U_h\eta(u)=\eta(u+h)$, $h\in\mathbb R$, because $\pi(e^h,0)=U_h$. The family of translations is ergodic for Lebesgue measure: if a Lebesgue measurable set $E$ is invariant under every translation up to null sets, replace it by a Borel set equal to it a.e. using [F5]. Translation preserves null sets, so the new indicator is still invariant a.e. under each translation, and its composition with $(u,t)\mapsto u+t$ is Borel, hence product-measurable. Then $\int_{\mathbb R}\int_{\mathbb R}|1_E(u+t)-1_E(u)|^2\,du\,dt=0$ by Tonelli [F5], since every $t$-slice vanishes; hence $(u,t)\mapsto|1_E(u+t)-1_E(u)|$ is $0$ a.e., so for some $u_0$ one has $1_E(u_0+t)=1_E(u_0)$ for a.e. $t$, and $1_E$ is a.e. equal to the constant $1_E(u_0)$; being an indicator, $E$ is null or conull. Applying the moreover clause of [F4] to the commuting translation unitaries gives that $m$ is constant a.e., so $T=\lambda I$. [F4, F5, step 1.4]

2.2 Hence $\chi_t\prec\pi$. Let $K\subseteq G$ be compact and $\epsilon>0$, and let $z\in\mathbb C$; since $\log a$ and $b$ stay in bounded ranges $|h|\le L$, $|b|\le B$ on $K$, choose $R>2L$ so large that $2L/R+Be^{-R/2}<\epsilon/(1+|z|^2)$. Then step 1.5 gives $\sup_{(a,b)\in K}\bigl||z|^2\chi_t(a,b)-\langle\pi(a,b)(z\eta_R),z\eta_R\rangle\bigr|\le|z|^2(2L/R+Be^{-R/2})<\epsilon$, so every diagonal coefficient of the one-dimensional representation $\chi_t$, hence every function of positive type associated to $\chi_t$, is a compact-uniform limit of coefficients of $\pi$; by [F9], $\chi_t\prec\pi$. [F7, F9, step 1.5]

3.1 $\pi$ is irreducible. If $M\subseteq L^2(\mathbb R)$ were a closed invariant subspace different from $0$ and $H$, its orthogonal projection $P_M$ would commute with every $\pi(g)$ by [F6] and would satisfy $P_M\ne0,I$, contradicting step 2.1. Hence $H$ has no nontrivial closed invariant subspace, and $\pi$ is irreducible; its carrier $L^2(\mathbb R)$ is infinite dimensional, since the indicators of $[n,n+1)$, $n\in\mathbb Z$, are an infinite orthonormal family. [F6, F7, step 2.1]

4.1 Each $\chi_t(a,b)=a^{it}$ is a continuous unitary character, i.e. a one-dimensional strongly continuous unitary representation; its diagonal coefficients at $z\in\mathbb C$ are $|z|^2\chi_t$. No $\chi_t$ is unitarily equivalent to $\pi$, since unitarily equivalent representations have isomorphic carriers and $\dim L^2(\mathbb R)=\infty$ while $\dim\mathbb C=1$; in particular $\pi\not\simeq1_G=\chi_0$, and $[\pi]\ne[1_G]$. [F7, step 3.1]

5.1 Fell closure and failure of Hausdorffness. Since $\chi_t$ and $\pi$ are irreducible, [F10] gives $\chi_t\in\overline{\{[\pi]\}}$ in the Fell topology; in particular $[1_G]=[\chi_0]\in\overline{\{[\pi]\}}$ with $[1_G]\ne[\pi]$ by step 4.1, so $\{[\pi]\}$ is not closed. If the Fell topology were Hausdorff, the distinct points $[1_G]$ and $[\pi]$ would have disjoint open neighbourhoods $U\ni[1_G]$, $V\ni[\pi]$; since $[1_G]$ lies in the closure of $\{[\pi]\}$, the neighbourhood $U$ meets $\{[\pi]\}$ and therefore $[1_G]\in U$ and $[\pi]\in U\cap V$, contradicting disjointness. Hence $\widehat G$ is not Hausdorff. [F10, F11, step 4.1, step 2.2]

6.1 The Axiom of Choice is inherited from the multiplication lemma and the Fell suppliers; the explicit representation, the coefficient estimates and the ergodicity computation use no further choice ([[def-axiom-of-choice]]). [given] ∎ 