---
id: thm-serre-vanishing
kind: theorem
title: "Serre vanishing for coherent sheaves and ample twists"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-variable-polynomial-ring-noetherian
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-direct-image-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-morphism-pre-proj
  - def-pullback-module-ringed-spaces
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - def-very-ample-invertible-sheaf-relative
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - thm-cohomological-dimension-projective-n-space
  - thm-ample-powers-very-ample-proper-base
  - thm-projective-morphism-proper
  - thm-sheaf-morphism-isomorphism-stalkwise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.17 (Tag 02Y0)"
      url: "https://stacks.math.columbia.edu/tag/02Y0"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 18.6 and 19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cited suppliers
([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$,
let $X$ be a scheme projective over $A$ in the finite-dimensional
H-projective convention ([[def-projective-morphism-pre-proj]]): the structure
morphism $X\to\operatorname{Spec}A$ factors as a closed immersion
$X\hookrightarrow\mathbb P^N_A$ followed by the projection, for some $N\ge0$
([[def-relative-projective-space-standard-charts]]). Let $L$ be an ample
invertible $\mathcal O_X$-module ([[def-ample-invertible-sheaf]],
[[def-invertible-sheaf]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). Then there is an
integer $m_0$ such that
$$H^q\bigl(X,\mathcal F\otimes_{\mathcal O_X}L^{\otimes m}\bigr)=0$$
for every $q>0$ and every integer $m\ge m_0$, with a single bound $m_0$
working simultaneously for all $q$; here $H^q$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]) and $L^{\otimes m}$ is the
$m$-fold tensor power ([[def-twist-quasi-coherent-sheaf-projective]]). The
empty scheme $X$, the empty base $\operatorname{Spec}A=\varnothing$, the zero
ring $A=0$, the zero module $\mathcal F=0$ and the case of an ample $L$ with
$\mathcal O(1)$ already very ample for a power $L^{\otimes d}$ with $d=1$ are
included. No effectivity of $m_0$ is claimed.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a Noetherian commutative ring $A$, a scheme $X$ projective over $A$ in the H-projective convention, an ample invertible module $L$ on $X$, and a coherent module $\mathcal F$ on $X$.

[F1] $X$ is proper of finite type over $\operatorname{Spec}A$ ([[def-projective-morphism-pre-proj]], [[thm-projective-morphism-proper]]), and for $A$ Noetherian the projective space $\mathbb P^N_A$ is locally Noetherian, since its standard charts are spectra of the polynomial rings $A[x^{(i)}_\ell]$, which are Noetherian. ([[def-relative-projective-space-standard-charts]], [[cor-finite-variable-polynomial-ring-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]])

[F2] For $A$ Noetherian, $f:X\to\operatorname{Spec}A$ proper of finite type and $L$ ample there exist $d\ge1$ and a closed immersion $i:X\hookrightarrow \mathbb P^N_A$ over $\operatorname{Spec}A$ with $i^*\mathcal O(1)\cong L^{\otimes d}$; that is, $L^{\otimes d}$ is closed H-very ample relative to the affine base. ([[thm-ample-powers-very-ample-proper-base]], [[def-very-ample-invertible-sheaf-relative]])

[F3] Tensor powers of the invertible module $L$ are invertible, and for a coherent $\mathcal F$ every twist $\mathcal F\otimes L^{\otimes r}$ is coherent: coherence is local on $X$, and on an open set where $L$ is trivial the twist is isomorphic to $\mathcal F$. ([[def-invertible-sheaf]], [[def-coherent-module-scheme]], [[def-sheaf-tensor-product]])

[F4] For a closed immersion $j:Y\to Z$ of schemes and a quasi-coherent $\mathcal O_Y$-module $\mathcal G$ one has $H^q(Y,\mathcal G)\cong H^q(Z,j_*\mathcal G)$ for every $q\ge0$; if in addition $Z$ is locally Noetherian and $\mathcal G$ is coherent, then $j_*\mathcal G$ is coherent. ([[lem-closed-immersion-cohomology-pushforward]])

[F5] For a closed immersion $j:Y\to Z$ and any $\mathcal O_Y$-module $\mathcal G$ one has $j_*\bigl(\mathcal G\otimes_{\mathcal O_Y}j^*\mathcal F\bigr) \cong(j_*\mathcal G)\otimes_{\mathcal O_Z}\mathcal F$ for every $\mathcal O_Z$-module $\mathcal F$: at a point $z=j(y)$ both sides have stalk $\mathcal G_y\otimes_{\mathcal O_{Z,z}}\mathcal F_z$, by associativity of tensor products and the stalk formula for pullback; outside the closed image both stalks are zero. The natural projection morphism is therefore an isomorphism on all stalks. Consequently, when $\mathcal G$ and $\mathcal F$ are quasi-coherent, $H^q(Z,(j_*\mathcal G)\otimes\mathcal F)\cong H^q(Y,\mathcal G\otimes j^*\mathcal F)$ by [F4]. ([[lem-closed-immersion-affine-quotient-and-base-change]], [[def-direct-image-sheaf]], [[def-sheaf-tensor-product]])

[F6] For a coherent module $\mathcal H$ on $\mathbb P^N_A$ with $A$ Noetherian there is $n_0$ such that $H^q(\mathbb P^N_A,\mathcal H(n))=0$ for every $q>0$ and every $n\ge n_0$. Indeed [[lem-projective-coherent-cohomology-finite-and-vanishing]] gives a threshold for each $q=1,\ldots,N$. Take the maximum of these finitely many thresholds and $0$; for $q>N$ every twist vanishes by [[thm-cohomological-dimension-projective-n-space]]. This also covers $N=0$.

[F7] Pullback of modules is monoidal: $j^*(\mathcal F\otimes_{\mathcal O_Z}\mathcal G)\cong j^*\mathcal F\otimes_{\mathcal O_Y}j^*\mathcal G$ for every morphism $j:Y\to Z$ of schemes and $\mathcal O_Z$-modules $\mathcal F,\mathcal G$. Indeed at a point $y$ both sides have stalk $\mathcal F_{j(y)}\otimes_{\mathcal O_{Z,j(y)}}\mathcal O_{Y,y} \otimes_{\mathcal O_{Y,y}}\mathcal G_{j(y)}\otimes_{\mathcal O_{Z,j(y)}}\mathcal O_{Y,y}$ by the stalk formulas for pullback and for the tensor product, and a morphism of sheaves is an isomorphism once it is one on every stalk. Hence for an invertible sheaf and $n\ge0$ one has $j^*(\mathcal L^{\otimes n})\cong (j^*\mathcal L)^{\otimes n}$. ([[def-pullback-module-ringed-spaces]], [[lem-stalk-inverse-image-sheaf]], [[lem-stalk-tensor-product]], [[thm-sheaf-morphism-isomorphism-stalkwise]], [[def-invertible-sheaf]])

[F8] Arithmetic of the residue classes: for integers $d\ge1$ and $n_r\ge0$ indexed by $r\in\{0,\dots,d-1\}$, put $m_0=d\cdot\max_rn_r+(d-1)$. Every integer $m\ge m_0$ has a unique presentation $m=dn+r$ with $n\ge0$ and $0\le r<d$, and then $n=\lfloor m/d\rfloor\ge\lfloor m_0/d\rfloor=\max_rn_r\ge n_r$. [algebra]



## Proof

**Proof technique:** direct: replace the ample line bundle by a high power that is pulled back from a projective embedding, push forward the finitely many residue twists of the coherent sheaf along that embedding, apply the projective-space vanishing lemma to each pushforward, and translate its high twists back along the embedding using the projection identity and the monoidality of pullback.

1.1 The embedding and the power. By [F1] the structure morphism $X\to\operatorname{Spec}A$ is proper of finite type, so [F2] provides $d\ge1$ and a closed immersion $i:X\hookrightarrow\mathbb P^N_A$ over $\operatorname{Spec}A$ with $i^*\mathcal O(1)\cong L^{\otimes d}$. [F1, F2]
1.2 The finitely many coherent pushforwards. For each residue $r\in\{0,\dots,d-1\}$ the module $\mathcal G_r=\mathcal F\otimes_{\mathcal O_X}L^{\otimes r}$ is coherent by [F3]; since the target $\mathbb P^N_A$ is locally Noetherian by [F1], the pushforward $\mathcal H_r=i_*\mathcal G_r$ is coherent on $\mathbb P^N_A$ by [F4]. [F1, F3, F4]
2.1 Projective-space vanishing. Applying [F6] to each $\mathcal H_r$ gives a vanishing threshold; enlarge it to an integer $n_r\ge0$. Then $H^q(\mathbb P^N_A,\mathcal H_r(n))=0$ for every $q>0$ and every $n\ge n_r$. [F6, step 1.2]
2.2 Translation of the twists. Fix $r$ and $n\ge0$. By [F7] applied to the invertible sheaf $\mathcal O(1)$, $i^*\mathcal O(n)\cong(i^*\mathcal O(1))^{\otimes n}\cong L^{\otimes dn}$, so $\mathcal G_r\otimes_{\mathcal O_X}i^*\mathcal O(n)\cong\mathcal F\otimes L^{\otimes r}\otimes L^{\otimes dn}\cong\mathcal F\otimes L^{\otimes dn+r}$; the projection identity of [F5] then gives $H^q(\mathbb P^N_A,\mathcal H_r(n))\cong H^q(X,\mathcal F\otimes L^{\otimes dn+r})$ for every $q\ge0$. [F5, F7, step 1.2, algebra]
3.1 Vanishing along the residue classes. Combining [step 2.1] with [step 2.2]: for every $r\in\{0,\dots,d-1\}$, every $q>0$ and every $n\ge n_r$ one has $H^q(X,\mathcal F\otimes L^{\otimes dn+r})=0$. [step 2.1, step 2.2]
4.1 A single bound for all twists and all degrees. Put $m_0=d\cdot\max_rn_r+(d-1)$ as in [F8]. Given $m\ge m_0$, write $m=dn+r$ with $0\le r<d$; then $n\ge\max_rn_r\ge n_r$ by [F8], so [step 3.1] gives $H^q(X,\mathcal F\otimes L^{\otimes m})=0$ for every $q>0$. Since $m_0$ depends on the finitely many $n_r$ but not on $q$, the vanishing is simultaneous in $q$, as asserted. [F8, step 3.1]
5.1 Boundary and choice accounting. If $\mathcal F=0$ then all groups vanish and any $m_0$ works; if $A=0$ then $\mathbb P^N_A=\varnothing$, $X=\varnothing$ and again all groups vanish, with the Noetherian and coherence hypotheses vacuous or satisfied by the zero ring; if $X=\varnothing$ the same holds. If $L^{\otimes d}\cong i^*\mathcal O(1)$ holds with $d=1$ then $m_0=\max_rn_r$ in the argument, so the bound is the maximum of the projective-space bounds over the single residue class $r=0$; the theorem nevertheless allows any $d\ge1$. The Axiom of Choice is consumed through the ample-powers embedding [F2], the coherence theorem [F4] and the projective-space finiteness and vanishing [F6]; the finitely many residue classes are indexed by $\{0,\dots,d-1\}$, and no further family is chosen. [F2, F4, F6, step 4.1, cases: zero module and zero ring and empty X and d=1] ∎
