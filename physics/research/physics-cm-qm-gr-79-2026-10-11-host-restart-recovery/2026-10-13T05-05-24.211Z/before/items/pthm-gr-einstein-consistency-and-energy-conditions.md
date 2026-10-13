---
id: pthm-gr-einstein-consistency-and-energy-conditions
kind: physics-theorem
title: "Consistency conditions of the adopted field law: conservation, trace, parameter variation and the energy conditions of a perfect fluid"
status: draft
origin: session
domain: physics
dependency_level: 13
physical_scope: "Smooth classical domain of the framework in either presentation of the adopted field law: an oriented time-oriented smooth Lorentzian four-manifold, a constant cosmological parameter, a smooth stress-energy tensor on the model's matter domain, and the field equation G_{ab}+Lambda g_{ab}=kappa T_{ab}. The conclusions are conditional consequences of the adopted field law; they assert no existence, no propagation and no empirical fact, and none of the four energy conditions is universally forced by the field equation; particular matter models may imply some, and otherwise they are additional assumptions."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-einstein-field-law, post-gr-classical-gravitational-action, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, thm-gr-second-bianchi-and-divergence-free-einstein, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-stress-energy-tensor-field, def-gr-energy-conditions, def-gr-perfect-fluid-matter-model, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, lem-gr-future-causal-classification-by-a-timelike-field, thm-gram-schmidt-orthonormalisation, def-gr-si-unit-and-coordinate-conventions, def-gr-tensor-fields-and-components, thm-gr-curvature-tensoriality-and-coordinate-formula]
dependency_roles:
  post-gr-einstein-field-law: physical-assumption
  post-gr-classical-gravitational-action: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-tensor-fields-and-components: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 'Postulates of General Relativity': the symmetric conserved tensor T_{ab} and the Einstein equation, printed pp. 66-68 (PDF pp. 67-69)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.4.1 and 4.5.7: the contracted Bianchi identity (3.40)-(3.44) and the energy conditions with the perfect-fluid and cosmological specializations, printed pp. 130-134 and 194-198 (PDF pp. 137-141 and 201-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 (3.94), printed p. 82 (PDF p. 89), and Ch. 4: the Weak Energy Condition (4.72) with the perfect-fluid reading, printed p. 118 (PDF p. 125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Adopt one of the two presentations of the framework's field law, that is,
[[post-gr-classical-gravitational-action]] or
[[post-gr-einstein-field-law]], for a model with geometric data and matter
sector satisfying [[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]]. Let $(M,g,N)$ be the model's smooth
time-oriented Lorentzian four-manifold with metric-selected connection $\nabla$
and curvature tensors $R^{a}{}_{bcd}$, $\operatorname{Ric}_{ab}$, $S$,
$G_{ab}$ ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]), let $T$ be the model's smooth
symmetric stress-energy tensor field on the matter domain
([[def-gr-stress-energy-tensor-field]]), let $\Lambda\in\mathbb R$ be the
constant parameter and $\kappa=8\pi G_N/c^4$ as in
[[def-gr-si-unit-and-coordinate-conventions]]. Let $U\subseteq M$ be the
model's open matter domain and suppose the field law holds on $U$,

$$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}\qquad\text{on }U .$$

**(a) Necessary conservation.** $\nabla^aT_{ab}=0$ on $U$. Consequently a
prescribed smooth symmetric $T$ with $\nabla^aT_{ab}\neq0$ at some point cannot
satisfy the field law there with that proposed metric; the divergence is
computed using its metric-selected connection, and may change if the metric
is changed.

**(b) Trace.** On $U$, $g^{ab}T_{ab}$ satisfies
$-S+4\Lambda=\kappa\,g^{ab}T_{ab}$.

**(c) Parameter variation.** If instead $\Lambda:U\to\mathbb R$ is a smooth
function and the field law $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ holds on $U$
with that function in place of a constant, then on $U$

$$\kappa\nabla^aT_{ab}=\partial_b\Lambda .$$

Consequently, at every point where $d\Lambda\ne0$, the equation requires
$\nabla^aT_{ab}\ne0$; where $d\Lambda=0$, this identity imposes conservation.
A smooth $\Lambda$ can be locally constant but nonconstant across disconnected
components of $U$, in which case this identity does not force nonconservation.

**(d) A vacuum solution.** In the global vacuum example take
$U=M=\mathbb R^4$ with the identity chart and the flat metric
$g_{ab}=\operatorname{diag}(-1,1,1,1)$ (a smooth Lorentzian metric
with time orientation $N=\partial_0$), the field law with $T=0$ and $\Lambda=0$
holds: $G=0$ and $S=0$ for the flat metric. With $T=0$ and $\Lambda\neq0$ it
fails, since $G+\Lambda g=\Lambda g\neq0$.

**(e) Energy conditions are additional assumptions.** Neither adopted
presentation of the field law contains a clause imposing any of the weak, null,
dominant or strong energy conditions of [[def-gr-energy-conditions]]; none of
the four is a universal consequence of that equation, as the direct-equation
perfect-fluid model in the proof shows. Particular matter models may imply
energy conditions; when not derived, they are additional assumptions in the
sense of clause (iv) of [[post-gr-field-and-matter-assumptions]].

**(f) Perfect-fluid rest-frame reading.** Let $(\varepsilon,p,n,T)$ be a
perfect-fluid model on its matter domain
([[def-gr-perfect-fluid-matter-model]]), and at any $p\in U$ let
$(e_0,e_1,e_2,e_3)$ be a $g_p$-orthonormal basis with $e_0=n_p$. Then
$T_{AB}=\operatorname{diag}(\varepsilon,p,p,p)$ in that basis, and at $p$

$$T\ \text{satisfies WEC}\Longleftrightarrow\varepsilon\ge0\ \text{and}\ \varepsilon+p\ge0,$$

$$T\ \text{satisfies NEC}\Longleftrightarrow\varepsilon+p\ge0,\qquad T\ \text{satisfies DEC}\Longleftrightarrow\varepsilon\ge|p|,$$

$$T\ \text{satisfies SEC}\Longleftrightarrow\varepsilon+3p\ge0\ \text{and}\ \varepsilon+p\ge0 .$$

In particular a model with $\varepsilon>0$ and $p=-\varepsilon$ satisfies the
NEC, WEC and DEC and violates the SEC; the inequality signs here are those of
the strict-timelike convention of [[def-gr-energy-conditions]], under which
continuity extensions to the causal cone are not assumed.

## Facts & Assumptions

**Given:** The adopted field law in one of its two presentations on the open matter domain $U$; a model with smooth $(M,g,N)$, smooth symmetric $T$ on $U$, constant $\Lambda$ and coupling $\kappa=8\pi G_N/c^4$; in (f) additionally a perfect-fluid model on $U$.

[L1] The Einstein tensor of the metric-selected connection satisfies $\nabla^aG_{ab}=0$, and $g^{ab}G_{ab}=-S$ with $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[thm-gr-second-bianchi-and-divergence-free-einstein]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] $\nabla g=0$ and $\nabla g^{-1}=0$; the extension of $\nabla$ to tensor fields obeys the product rule, and for a smooth function $f$, $\nabla^a(fg_{ab})=\partial_bf$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]]).

[L3] The flat metric on the identity chart of $\mathbb R^4$ has vanishing Christoffel symbols, curvature and scalar curvature; the identity chart metric is smooth, symmetric and Lorentzian of signature $(-,+,+,+)$, and $N=\partial_0$ is a time orientation ([[def-gr-smooth-lorentzian-objects]], [[def-gr-curvature-tensor-and-derived-tensors]], [[def-gr-tensor-fields-and-components]]).

[L4] An observer $n_p$ with $g_p(n_p,n_p)=-1$ has a positive definite three-dimensional rest space $n_p^{\perp}$; choosing a $g_p$-orthonormal basis of $n_p^{\perp}$ by Gram–Schmidt and adjoining $e_0:=n_p$ gives a $g_p$-orthonormal basis $(e_0,e_1,e_2,e_3)$ of $T_pM$ ([[def-gr-observer-and-rest-space]], [[lem-gr-observer-projection-decomposition]], [[thm-gram-schmidt-orthonormalisation]]).

[L5] The four energy conditions are the pointwise inequalities of [[def-gr-energy-conditions]]: WEC $T(v,v)\ge0$ for timelike $v$; NEC $T(v,v)\ge0$ for null $v$; DEC $-\sharp(T(v,\cdot))\in\operatorname{cl}(C_p^+)$ for future timelike $v$; SEC $(T-\tfrac12(\operatorname{tr}_gT)g)(v,v)\ge0$ for timelike $v$.

[L6] The coordinate curvature formula of [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b) applies to every smooth Lorentzian metric with its metric-selected connection; contraction gives $\operatorname{Ric}_{bd}=R^a{}_{bad}$, $S=g^{bd}\operatorname{Ric}_{bd}$ and $G=\operatorname{Ric}-\tfrac12Sg$.

## Proof

**Proof technique:** direct; differentiate the field equation using the contracted Bianchi identity, contract traces, test the flat metric, and evaluate the quadratic inequalities of a rest-frame diagonal tensor.

1.1 (Conservation and trace.) Applying $\nabla^a$ to the field equation and using [L1] and [L2]: $\kappa\nabla^aT_{ab}=\nabla^aG_{ab}+\Lambda\nabla^ag_{ab}=0$, so $\nabla^aT_{ab}=0$ since $\kappa>0$; this is (a). Contracting the field equation with $g^{ab}$ and using [L1]: $g^{ab}(G_{ab}+\Lambda g_{ab})=-S+4\Lambda=\kappa g^{ab}T_{ab}$, which is (b). [L1, L2, algebra]

1.2 (Function parameter.) If $\Lambda$ is a smooth function and the equation holds, then by [L1] and [L2], $\kappa\nabla^aT_{ab}=\nabla^a\bigl(G_{ab}+\Lambda g_{ab}\bigr)=\partial_b\Lambda$, which is (c). [L1, L2, algebra]

1.3 (Flat solution.) By [L3], the flat metric has $\Gamma=0$, hence $R=0$, $\operatorname{Ric}=0$, $S=0$ and $G=0$; with $T=0$ and $\Lambda=0$ the field equation reads $0=0$, while for $\Lambda\neq0$ it would require $\Lambda g_{ab}=0$, which fails because $g$ is nondegenerate; this is (d). [L3, algebra]

1.4 (Rest-frame components.) By [L4] choose the orthonormal basis with $e_0=n_p$ and write $T_{AB}=T(e_A,e_B)$ and let $e^A$ be the dual covectors, $e^A(e_B)=\delta^A{}_B$. From $T_{ab}=(\varepsilon+p)n_an_b+pg_{ab}$ ([[def-gr-perfect-fluid-matter-model]]) and $n=n_p=e_0$: $T_{00}=(\varepsilon+p)(-1)^2+p(-1)=\varepsilon$, $T_{0i}=0$, $T_{ij}=p\,\delta_{ij}$; so $T_{AB}=\operatorname{diag}(\varepsilon,p,p,p)$. For a vector $v=v^0e_0+\mathbf v$ with $\mathbf v=\sum_{i\ge1}v^ie_i$, $T(v,v)=\varepsilon(v^0)^2+p|\mathbf v|^2$. [L4, algebra]

2.1 (WEC and NEC.) A vector $v\neq0$ is timelike exactly when $(v^0)^2>|\mathbf v|^2$ and null exactly when $(v^0)^2=|\mathbf v|^2$ with $v\neq0$ ([[def-gr-smooth-lorentzian-objects]]). Writing $s:=|\mathbf v|/|v^0|\in[0,1)$ for timelike $v$, $T(v,v)=(v^0)^2[\varepsilon+ps^2]$. This is nonnegative for all such $v$ if and only if $\varepsilon\ge0$ (take $\mathbf v=0$) and $\varepsilon+p\ge0$ (let $s\to1$, i.e. approach the null cone); conversely these inequalities make every value nonnegative. For null $v$, $T(v,v)=(v^0)^2(\varepsilon+p)$, so the NEC is exactly $\varepsilon+p\ge0$. [step 1.4, L5, algebra]

2.2 (DEC.) By [L5] and [L2], the DEC requires $w:=-\sharp(T(v,\cdot))$ to lie in the closed future cone, including zero, for every future timelike $v$. In the orthonormal basis, $T(v,\cdot)=\varepsilon v^0\,e^0+p\sum_iv^i\,e^i$ and $\sharp$ raises with $\operatorname{diag}(-1,1,1,1)$, so $w=\varepsilon v^0e_0-p\sum_iv^ie_i$. Since $v$ is future and $e_0=n_p$ is the future unit normal of the rest frame, $v^0>0$. By [[def-gr-energy-conditions]] and [[lem-gr-future-causal-classification-by-a-timelike-field]], $w$ lies in $\operatorname{cl}(C_p^+)$ exactly when $w=0$ or $w$ is future-directed and causal; for $w=\varepsilon v^0e_0-p\sum_iv^ie_i$ this is exactly the pair of conditions $\varepsilon v^0\ge0$ and $(\varepsilon v^0)^2\ge p^2|\mathbf v|^2$. Requiring them for all future timelike $v$ forces $\varepsilon\ge0$ (take $\mathbf v=0$, so that $w=\varepsilon e_0$ must be $0$ or future causal) and $\varepsilon^2\ge p^2$, that is $\varepsilon\ge|p|$ (let $|\mathbf v|/v^0\to1$); conversely $\varepsilon\ge|p|$ gives both conditions. This is the DEC equivalence. [step 1.4, L5, algebra]

3.1 (SEC.) By [L5], with $\operatorname{tr}_gT=g^{ab}T_{ab}=-\varepsilon+3p$ (from step 1.4), the tensor $T-\tfrac12(\operatorname{tr}_gT)g$ has rest-frame components $\tfrac{\varepsilon+3p}{2}$ in the $(0,0)$ slot and $\tfrac{\varepsilon-p}{2}\delta_{ij}$ in the spatial slots, so its value on $v=v^0e_0+\mathbf v$ is $\tfrac{(v^0)^2}{2}\bigl[(\varepsilon+3p)+(\varepsilon-p)s^2\bigr]$ with $s=|\mathbf v|/|v^0|\in[0,1)$. This is nonnegative for every $s\in[0,1)$ exactly when $\varepsilon+3p\ge0$ (at $s=0$) and $2(\varepsilon+p)\ge0$ (letting $s\to1$), which is the SEC equivalence; for $\varepsilon>0$, $p=-\varepsilon$ the conditions NEC, WEC and DEC hold with the equalities $\varepsilon+p=0$ and $\varepsilon=|p|$, while SEC fails since $\varepsilon+3p=-2\varepsilon<0$. [step 1.4, step 2.1, L5, algebra]

4.1 (Energy conditions are not universal consequences.) The absence of inequalities from the adopted law is a formulation fact; nonimplication also needs a model. On $M=\mathbb R^4$ with coordinates $(t,x^1,x^2,x^3)$, choose $L>0$, put $a(t)=\exp((t/L)^2)$ and $H=a'/a=2t/L^2$, and set $g=-dt^2+a^2\sum_i(dx^i)^2$, $N=n=\partial_t$, $\Lambda=0$. This metric is smooth Lorentzian and $n$ is future unit timelike. Its only nonzero Christoffel symbols are $\Gamma^0{}_{ij}=aa'\delta_{ij}$ and $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H\delta^i{}_j$. Substitution into the coordinate curvature formula of [[thm-gr-curvature-tensoriality-and-coordinate-formula]] and contraction give $\operatorname{Ric}_{00}=-3(H'+H^2)$, $\operatorname{Ric}_{0i}=0$, $\operatorname{Ric}_{ij}=a^2(H'+3H^2)\delta_{ij}$, hence $S=6H'+12H^2$, $G_{00}=3H^2$, $G_{ij}=-a^2(2H'+3H^2)\delta_{ij}$. Choose the prescribed perfect fluid $\varepsilon=3H^2/\kappa$, $p=-(2H'+3H^2)/\kappa$ and $T=(\varepsilon+p)n^\flat\otimes n^\flat+pg$. Then $G=\kappa T$, and its fluid equations hold: acceleration is zero, $\vartheta=3H$, spatial pressure gradient is zero, and $D\varepsilon+(\varepsilon+p)\vartheta=6HH'/\kappa-6HH'/\kappa=0$. Thus it is an admissible direct-equation model, with no energy condition additionally adopted. At $t=0$, $\varepsilon=0$ and $p=-4/(\kappa L^2)<0$; steps 2.1–3.1 show that WEC, NEC, DEC and SEC all fail there. This proves (e) without inferring nonimplication merely from the wording of a postulate. In length coordinates $L$ has dimension $\mathrm m$, $H$ dimension $\mathrm m^{-1}$, and $\varepsilon,p$ have the required energy-density units; the construction reports no observation. [step 2.1, step 2.2, step 3.1, L1, L2, L6, given, construct, algebra] ∎

## Remarks

- **What is not proved.** The theorem does not assert that any matter model satisfies any energy condition, that solutions of the field equation exist for prescribed data, or that a given solution propagates or is unique; those are separate mathematical problems.

- **Empirical status.** The energy conditions and the field law are adopted assumptions; experimental tests compare predictions of a fully specified model with reported observations and do not prove or refute the postulate deductively.

- **No empirical premises.** No measured input enters this item, so no empirical uncertainty is inherited by its conclusions.
