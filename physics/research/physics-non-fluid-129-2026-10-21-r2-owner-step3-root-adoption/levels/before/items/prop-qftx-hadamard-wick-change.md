---
id: prop-qftx-hadamard-wick-change
kind: proposition
title: Smooth Hadamard changes intertwine the polynomial microcausal products
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-wavefront-hadamard
  - lem-qftx-wavefront-chart-invariance
  - thm-qftx-wavefront-product
  - def-qftx-polynomial-microcausal-functionals
  - lem-qftx-microcausal-star-product
  - thm-qft-regular-wick-star-associativity
  - lem-qft-regular-normal-order-isomorphism
  - def-countable-choice
  - lem-qftx-microcausal-contraction-compatibility
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  lem-qftx-wavefront-chart-invariance: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
  lem-qftx-microcausal-star-product: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
  lem-qft-regular-normal-order-isomorphism: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qftx-microcausal-contraction-compatibility: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum
        field theory, Sections 5.1–5.2
      url: https://arxiv.org/html/1208.1428
      locator: Full-text equations (52)–(64), the microcausal condition, smooth
        symmetric change of Hadamard two-point distributions, and the
        normal-ordering intertwiner; the extension to the finite
        distribution-kernel class is proved locally.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and
        interacting quantum field theories: renormalization on physical
        backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–13, Sections 2.1–2.2,
        positive-frequency Hadamard wavefront relation and admissible
        contractions.
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W,W'\in\mathcal D'(M\times M)$ be scalar Hadamard bisolutions for the same $(M,g,P)$ and the same positive-frequency null relation, with
$$ W-W^{\mathsf T}=W'-W'^{\mathsf T}=iE $$
for one fixed distribution $E$. Then $K:=W'-W$ is a smooth symmetric function on $M\times M$. For every compactly supported polynomial microcausal functional $F$, define
$$ \Gamma_KF(\phi)=\left\langle F^{(2)}(\phi),\chi K\mu_g^{\otimes2}\right\rangle,\qquad \alpha_K=\exp\!\left(\frac{\hbar}{2}\Gamma_K\right) =\sum_{j\ge0}\frac{(\hbar/2)^j}{j!}\Gamma_K^j. $$
Here $\chi$ is any compactly supported cutoff equal to one near the compact support of $F^{(2)}(\phi)$, and $\mu_g$ is the metric density. The sum is finite on each $F$, $\alpha_K$ is bijective with inverse $\alpha_{-K}$, and, coefficientwise in the formal parameter $\hbar$,
$$ \alpha_K(F\star_WG)=\alpha_KF\star_{W'}\alpha_KG $$
for all $F,G\in\mathcal F_{\mu c}^{\mathrm{poly}}(M)$. No existence of $W$ or $W'$ is asserted.

## Statement references

[[def-qftx-wavefront-hadamard]]

[[def-qftx-polynomial-microcausal-functionals]]

[[lem-qftx-microcausal-star-product]]

[[thm-qft-regular-wick-star-associativity]]

[[lem-qft-regular-normal-order-isomorphism]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the manifold and operator conventions of [[def-qftx-wavefront-hadamard]], Hadamard bisolutions $W,W'$, and $F,G\in\mathcal F_{\mu c}^{\mathrm{poly}}(M)$.

[A1] Assume only Countable Choice $\mathrm{AC}_\omega$ for the wavefront pullback and product estimates ([[def-countable-choice]]).

[F1] A Hadamard bisolution has $\operatorname{WF}(W)=\operatorname{WF}(W')=\mathcal C_g^+$, with future-null first covector and its negative transported second covector; transpose exchanges this set with the past-frequency relation ([[def-qftx-wavefront-hadamard]]).

[F2] For distributions, $\operatorname{WF}(u+v)\subseteq\operatorname{WF}(u)\cup\operatorname{WF}(v)$, $\operatorname{WF}(\tau^*u)=\tau^*\operatorname{WF}(u)$, and an empty wavefront set is equivalent to smoothness ([[lem-qftx-wavefront-chart-invariance]]).

[F3] Hadamard contractions on the stated compactly supported polynomial microcausal class are defined coefficientwise and preserve that class; the conormal product and pullback rules they use are proved in [[thm-qftx-wavefront-product]] ([[lem-qftx-microcausal-star-product]]).

[F4] On $X=\mathbb R^d$, the regular polynomial contraction product for an arbitrary bidistribution $W$ is associative ([[thm-qft-regular-wick-star-associativity]]). Its interface is restricted to smooth compact coefficient kernels.

[F5] On the same regular polynomial class, for symmetric continuous $K$, $\alpha_K=\exp((\eta/2)\Gamma_K)$ is finite and satisfies $\alpha_K(F\star_WG)=\alpha_KF\star_{W+K}\alpha_KG$ ([[lem-qft-regular-normal-order-isomorphism]]). Its identity is the finite contraction/binomial formula; the local proof below checks that formula on distributional microcausal coefficients.

[F6] The actual two-original-vertex matchings with singular $W$ cross edges and smooth $K$ self/cross edges satisfy simultaneous and every intermediate transversality condition. Their canonical products, compact integrations, slot permutations and finite derivatives commute in the stated sense. This does not assert a singular self-contraction $\Gamma_W$. [[lem-qftx-microcausal-contraction-compatibility]]

## Proof

**Given:** [A1] and [F1]–[F6].

1.1 Define $\mathcal C_g^-:=\tau^*\mathcal C_g^+$, where $\tau(x,y)=(y,x)$; its first covectors are past-directed. Put $K=W'-W$. The common antisymmetric part gives $K-K^{\mathsf T}=0$, so $K$ is symmetric. By [F1]–[F2], $\operatorname{WF}(K)\subseteq\operatorname{WF}(W)\cup\operatorname{WF}(W')=\mathcal C_g^+$. Symmetry also gives $\operatorname{WF}(K)=\tau^*\operatorname{WF}(K)\subseteq\mathcal C_g^-$. A nonzero null covector cannot be both future and past, so $\mathcal C_g^+\cap\mathcal C_g^-=\varnothing$ and $\operatorname{WF}(K)=\varnothing$. By [F2], $K$ is smooth. [A1, F1, F2, given, algebra]

1.2 By [F3], $\Gamma_K$ is defined on the class and preserves microcausality. On a polynomial of degree $d$, $\Gamma_K^jF=0$ for $2j>d$, so $\alpha_KF$ and $\alpha_{-K}F$ are finite sums. The coefficient of $\Gamma_K^q$ in either composition is multiplied by $\sum_{j=0}^{q}\binom qj(-1)^{q-j}=(1-1)^q$, which is zero for $q>0$ and one for $q=0$. Hence $\alpha_K\alpha_{-K}=\alpha_{-K}\alpha_K=I$. [F3, algebra]

1.3 On the regular polynomial subspace of a Euclidean chart, [F4]–[F5] fix the contraction ordering and the factor $\hbar/2$. For the general class, label the two functional arguments by $1,2$ and define $D_L(F\otimes G)$ by multiplying their first derivative distributions by $L$ and integrating the contracted pair with $\mu_g^{\otimes2}$. Let $\Gamma_K^{(1)}$ and $\Gamma_K^{(2)}$ contract two derivative slots within the first and second arguments using the same density. The finite Leibniz expansion of the second derivative gives $$ \Gamma_K\circ m =m\circ(\Gamma_K^{(1)}+\Gamma_K^{(2)}+2D_K), $$ where $m$ is pointwise multiplication. The factor $2$ consists of the two cross terms, equal because $K$ is symmetric. Every term is defined by [F3] and is the canonical labelled matching of [F6]. Its two smooth cross terms are equal by the proved slot-permutation rule and symmetry of $K$, without extending the regular coefficient-kernel topology to singular inputs. [A1, F3, F4, F5, F6, algebra]

2.1 Expand each coefficient into its original $F$ and $G$ kernel slots. Every $D_W$ edge joins the first original block to the second; every additional edge from $\Gamma_K^{(1)}$, $\Gamma_K^{(2)}$ or $D_K$ is smooth. Each derivative slot is removed at most once. Hence [F6] proves the full matching and every intermediate product/pushforward are admissible and independent of edge order. Finite Leibniz and permutation identities count exactly the same labelled matchings in either order. Thus these operators commute on the coefficient expressions used here, and the binomial exponential law is a finite polynomial identity in commuting degree-lowering operations. It makes no assertion about a singular $\Gamma_W$ on one microcausal functional. Finite polynomial degree makes every coefficient sum finite. Thus $\alpha_K(F\star_WG)=m\,e^{\frac{\hbar}{2}(\Gamma_K^{(1)}+\Gamma_K^{(2)}+2D_K)}e^{\hbar D_W}(F\otimes G)=m\,e^{\frac{\hbar}{2}(\Gamma_K^{(1)}+\Gamma_K^{(2)})}e^{\hbar D_{W+K}}(F\otimes G)=\alpha_KF\star_{W+K}\alpha_KG$. Here $D_{W+K}=D_W+D_K$ by bilinearity and $W+K=W'$. These are coefficientwise identities of finite sums, not analytic convergence claims. Together with step 1.2 this proves the stated intertwiner and bijectivity. [F3, F6, step 1.2, step 1.3, algebra] ∎