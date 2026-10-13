---
id: lem-gr-schwarzschild-curvature-and-kretschmann-scalar
kind: lemma
title: "Orthonormal-frame curvature components and the Kretschmann scalar 12s^2/r^6 of the Schwarzschild exterior metric"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-ricci-and-einstein-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-local-frame-and-tetrad-fields, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-derivative, def-rational-power, def-countable-choice]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-ricci-and-einstein-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-derivative: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4.3 (3.53)-(3.54): the non-coordinate one-forms f dt, f^{-1}dr, r dtheta, r sin(theta) dphi and the curvature components R0101 = ff'' + (f')^2, R0202 = ff'/r, R2323 = (1-f^2)/r^2, printed pp. 136-137 (PDF pp. 143-144)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.2 (6.3): the Kretschmann scalar R_{mu nu rho sigma}R^{mu nu rho sigma} = 48G^2M^2/r^6 of the Schwarzschild solution and its finiteness at r = 2GM, printed p. 236 (PDF p. 243)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.30): the curvature invariant of the Schwarzschild metric, printed p. 172 (PDF p. 179); the displayed numerical coefficient in this source differs from the directly computed 48G^2M^2/c^4r^6 by a factor 4 and is not used here (see the coverage notes)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum of mass parameter $m_*$,
Schwarzschild radius $s=2G_Nm_*/c^2$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), with curvature data as in
[[lem-gr-schwarzschild-ricci-and-einstein-tensors]]. On each spherical-polar
product chart $(x^0,r,\vartheta,\varphi)$ define the local frame field

$$e_{\hat0}:=f^{-1/2}\partial_0,\qquad e_{\hat1}:=f^{1/2}\partial_1,\qquad e_{\hat2}:=r^{-1}\partial_2,\qquad e_{\hat3}:=(r\sin\vartheta)^{-1}\partial_3,$$

and for the curvature tensor define the **frame components**

$$\hat R_{\hat a\hat b\hat c\hat d}:=g\bigl(R(e_{\hat c},e_{\hat d})e_{\hat b},e_{\hat a}\bigr).$$

Then:

**(a) The frame field.** $(e_{\hat0},e_{\hat1},e_{\hat2},e_{\hat3})$ is a
smooth $g$-orthonormal frame (tetrad field) on the chart domain, with
$g(e_{\hat a},e_{\hat b})=\operatorname{diag}(-1,1,1,1)_{\hat a\hat b}$, and
$e_{\hat0}$ is future-directed timelike; it is a tetrad field in the sense of
[[def-gr-local-frame-and-tetrad-fields]]. It is not a coordinate frame.

**(b) Frame components.** The nonzero frame components, up to the
symmetries $R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab}$ of
[[thm-gr-curvature-algebraic-symmetries]], are

$$\hat R_{\hat0\hat1\hat0\hat1}=\frac{f''}{2},\qquad \hat R_{\hat0\hat2\hat0\hat2}=\hat R_{\hat0\hat3\hat0\hat3}=\frac{f'}{2r},$$

$$\hat R_{\hat1\hat2\hat1\hat2}=\hat R_{\hat1\hat3\hat1\hat3}=-\frac{f'}{2r},\qquad \hat R_{\hat2\hat3\hat2\hat3}=\frac{1-f}{r^2},$$

with $f'=s/r^2$ and $f''=-2s/r^3$; all other frame components vanish.

**(c) Kretschmann scalar.** Define the global smooth scalar field
$K:=R_{abcd}R^{abcd}$, with indices raised by the inverse metric. On the
spherical-polar chart locus its component expression is

$$K=f''^2+\frac{4(f')^2}{r^2}+\frac{4(1-f)^2}{r^4},$$

and for the model function $f=1-s/r$ this is

$$K=\frac{12s^2}{r^6}=\frac{48\,G_N^2m_*^2}{c^4\,r^6}.$$

The scalar identity is first computed on the regular angular locus and holds
on all of $M$ by smoothness and density. Since $r>s$ on $M$, one has
$0<K=12s^2/r^6<12/s^4$ at every point; as $r\downarrow s$ the expression has
the finite boundary value $12/s^4$, and the expression $12s^2/r^6$, read as a
function of $r>0$, grows without bound as $r\downarrow0$.

**(d) Scope.** The lemma computes curvature data of the exterior datum on
$r>s$. The limit $r\downarrow s$ is the boundary value on $M$ of the smooth
expression $12s^2/r^6$; no value of the metric at $r=s$ or at $r=0$ is used
or asserted here, those regions being outside the datum (the regular
continuation across $r=s$ is the separate extension lemma of this page).

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum, a spherical-polar product chart $(x^0,r,\vartheta,\varphi)$ with $0<\vartheta<\pi$, the functions $f=1-s/r$, $f'=s/r^2$, $f''=-2s/r^3$, and the local frame field $e_{\hat a}$ of the statement.

[L1] The metric components and inverse components in the chart are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$, $g^{00}=-f^{-1}$, $g^{11}=f$, $g^{22}=r^{-2}$, $g^{33}=r^{-2}\sin^{-2}\vartheta$, off-diagonal components zero ([[lem-gr-schwarzschild-metric-properties]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] The nonzero lowered curvature components in the chart are $R_{0101}=f''/2$, $R_{0202}=rff'/2$, $R_{0303}=rff'\sin^2\vartheta/2$, $R_{1212}=-rf'/(2f)$, $R_{1313}=-rf'\sin^2\vartheta/(2f)$, $R_{2323}=r^2(1-f)\sin^2\vartheta$, and every component whose index pairs do not coincide as unordered pairs, or with a repeated index inside a pair, vanishes ([[lem-gr-schwarzschild-ricci-and-einstein-tensors]] clauses (a) and (d)).

[L3] Curvature components transform as those of a $(0,4)$-tensor: if $e_{\hat a}=d_{\hat a}{}^\mu\partial_\mu$ are the coefficients of a frame field, then the frame components of the lowered curvature are $\hat R_{\hat a\hat b\hat c\hat d}=d_{\hat a}{}^\alpha d_{\hat b}{}^\beta d_{\hat c}{}^\gamma d_{\hat d}{}^\delta R_{\alpha\beta\gamma\delta}$ evaluated on the same chart domain; the tensor $R$ is smooth, its components transform by this law, and tensor identities and scalar contractions are intrinsic ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-tensor-fields-and-components]], [[thm-gr-curvature-algebraic-symmetries]]).

[L4] The scalar $R_{abcd}R^{abcd}$ with $R^{abcd}=g^{a\alpha}g^{b\beta}g^{c\gamma}g^{d\delta}R_{\alpha\beta\gamma\delta}$ is frame independent. In an orthonormal Lorentz frame each ordered component contributes $(-1)^m(\hat R_{\hat a\hat b\hat c\hat d})^2$, where $m$ is the number of time indices among $\hat a,\hat b,\hat c,\hat d$. The only nonzero frame components listed in clause (b), and all their symmetry variants, have either zero or two time indices, so every nonzero contribution has positive sign ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-tensor-fields-and-components]], [[def-gr-local-frame-and-tetrad-fields]], [[lem-gr-schwarzschild-ricci-and-einstein-tensors]] clause (a)).

[L5] The model functions satisfy $f'=s/r^2$, $f''=-2s/r^3$; on the chart domain $r>s>0$ and $\sin\vartheta>0$, and the displayed expressions are smooth and positive or negative as indicated ([[def-derivative]], [[def-rational-power]]).

## Proof

**Proof technique:** verify the frame is orthonormal, rescale the coordinate curvature components of the preceding lemma into the frame, and add the squares of the frame components.

1.1 (Orthonormality.) By [L1], $g(e_{\hat0},e_{\hat0})=f^{-1}g_{00}=-1$, $g(e_{\hat1},e_{\hat1})=f\,g_{11}=1$, $g(e_{\hat2},e_{\hat2})=r^{-2}g_{22}=1$ and $g(e_{\hat3},e_{\hat3})=(r\sin\vartheta)^{-2}g_{33}=1$. Each $e_{\hat a}$ is a smooth multiple of a coordinate field by a smooth nonvanishing function on the chart domain, so the $e_{\hat a}$ are smooth vector fields and form a basis at every point; the mixed pairings vanish because the coordinate frame is $g$-orthogonal by [L1]. Hence the frame is $g$-orthonormal with the stated diagonal pairing. Since $e_{\hat0}=f^{-1/2}\partial_0$ with $f^{-1/2}>0$ and $\partial_0$ is future-directed by the time orientation of the datum, $e_{\hat0}$ is future-directed. This proves (a). [L1, L5, given, algebra]

2.1 (Frame components.) The coefficient matrix $d_{\hat a}{}^\mu$ of [L3] is diagonal with entries $d_{\hat0}{}^0=f^{-1/2}$, $d_{\hat1}{}^1=f^{1/2}$, $d_{\hat2}{}^2=r^{-1}$, $d_{\hat3}{}^3=(r\sin\vartheta)^{-1}$. Applying [L3] to the nonzero components of [L2]: $\hat R_{\hat0\hat1\hat0\hat1}=R_{0101}(d_{\hat0}{}^0)^2(d_{\hat1}{}^1)^2=(f''/2)f^{-1}f=f''/2$; $\hat R_{\hat0\hat2\hat0\hat2}=R_{0202}(d_{\hat0}{}^0)^2(d_{\hat2}{}^2)^2=(rff'/2)f^{-1}r^{-2}=f'/(2r)$; $\hat R_{\hat0\hat3\hat0\hat3}=R_{0303}(d_{\hat0}{}^0)^2(d_{\hat3}{}^3)^2=(rff'\sin^2\vartheta/2)f^{-1}(r\sin\vartheta)^{-2}=f'/(2r)$; $\hat R_{\hat1\hat2\hat1\hat2}=R_{1212}(d_{\hat1}{}^1)^2(d_{\hat2}{}^2)^2=(-rf'/(2f))fr^{-2}=-f'/(2r)$; $\hat R_{\hat1\hat3\hat1\hat3}=R_{1313}(d_{\hat1}{}^1)^2(d_{\hat3}{}^3)^2=(-rf'\sin^2\vartheta/(2f))f(r\sin\vartheta)^{-2}=-f'/(2r)$; and $\hat R_{\hat2\hat3\hat2\hat3}=R_{2323}(d_{\hat2}{}^2)^2(d_{\hat3}{}^3)^2=r^2(1-f)\sin^2\vartheta\,r^{-2}(r\sin\vartheta)^{-2}=(1-f)/r^2$. Every other frame component is a diagonal coefficient multiple of a coordinate component that vanishes by [L2], hence vanishes. This proves (b) and identifies all nonzero frame components. [L2, L3, step 1.1, algebra]

3.1 (The Kretschmann scalar from the frame components.) By [L4] and the fact that every nonzero component has zero or two time indices, each nonzero ordered quadruple contributes the positive square of its component. The pair symmetries of [L2] and [L3] show that for each of the six unordered pairs $P$ of distinct frame indices, the four ordered quadruples realizing $P$ in both pairs contribute four times the square of the corresponding component of step 2.1. Hence $K=4(f''/2)^2+4\bigl(f'/(2r)\bigr)^2\cdot 4+4\bigl((1-f)/r^2\bigr)^2$: the first term is the pair $\{0,1\}$; the factor $4\cdot4$ collects the four pairs $\{0,2\},\{0,3\},\{1,2\},\{1,3\}$ each contributing $4(f'/(2r))^2$; and the last term is the pair $\{2,3\}$. Simplifying, $K=f''^2+4(f')^2/r^2+4(1-f)^2/r^4$. The contraction is a smooth scalar on all of $M$, and this expression is smooth there; they agree on the dense regular angular locus, so they agree at the poles by continuity. This proves (c) up to the model specialisation. [L2, L3, L4, step 2.1, algebra]

4.1 (Specialisation and limits.) For $f=1-s/r$ one has $f'=s/r^2$ and $f''=-2s/r^3$, so $f''^2=4s^2/r^6$, $4(f')^2/r^2=4s^2/r^6$ and $4(1-f)^2/r^4=4s^2/r^6$; the sum is $12s^2/r^6=48G_N^2m_*^2/(c^4r^6)$, using $s=2G_Nm_*/c^2$. On $M$ the identity $K=12s^2/r^6$ holds at every point with $r>s>0$, so $0<K<12/s^4$; as $r\downarrow s$ the right-hand side tends to the finite value $12/s^4$, as $r\to+\infty$ it tends to $0$, and as a function of $r>0$ the expression $12s^2/r^6$ tends to $+\infty$ as $r\downarrow0$. These are statements about the displayed expression, not about the metric at $r=s$ or $r=0$; no value of the metric outside $M$ is used or asserted, which is clause (d). [L5, step 3.1, algebra] ∎

## Remarks

- **Conventions and the source value.** In the literature the invariant is
  often written $48G^2M^2/r^6$ in units $G=c=1$; with our $s=2G_Nm_*/c^2$
  this is the same number as $12s^2/r^6$. The displayed value
  $12G^2M^2/r^6$ appearing in one source cited above is a factor-4
  discrepancy from the direct computation performed here and is not
  inherited; the other cited source gives the consistent value.

- **What the invariant shows.** The boundary value $12/s^4$ of $K$ at
  $r\downarrow s$ shows that the divergence of the chart component $g_{11}$
  at $r=s$ is not accompanied by a divergence of this curvature invariant;
  on the smooth extension of the next lemma, where $r$ ranges over $(0,\infty)$
  and $K=12s^2/r^6$ holds there, the same expression grows without bound as
  $r\downarrow0$. Both facts are used in the horizon-and-singularity remark of
  this page.
