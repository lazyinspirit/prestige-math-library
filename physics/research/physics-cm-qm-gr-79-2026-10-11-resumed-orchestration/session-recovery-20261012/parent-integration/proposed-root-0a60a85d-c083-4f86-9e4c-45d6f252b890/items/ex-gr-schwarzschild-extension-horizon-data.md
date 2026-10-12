---
id: ex-gr-schwarzschild-extension-horizon-data
kind: example
title: "Explicit metric, orientation and curvature data of the advanced-chart extension at the horizon r = s"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-extension-chart, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, def-derivative, thm-algebra-of-derivatives, def-rational-power, def-interval]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-extension-chart: mathematical-premise
  lem-gr-schwarzschild-curvature-and-kretschmann-scalar: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 6.1.2-6.1.3: the Eddington-Finkelstein form, the horizon as a null surface and the finiteness of curvature invariants there, printed pp. 236-243 (PDF pp. 243-250)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the tortoise coordinate, the advanced (ingoing) Eddington-Finkelstein coordinates and the regular behaviour of the metric at r = 2GM, printed pp. 184-187 (PDF pp. 191-194)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be the Schwarzschild exterior datum with $s>0$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), and let
$(M_{\mathrm{ext}},g_{\mathrm{ext}})$ with chart $(v,r,\vartheta,\varphi)$
and time-orientation field
$N_{\mathrm{ext}}=A(r)\partial_v-\partial_r$,
$A(r)=\frac{f(r)+\sqrt{f(r)^{2}+4}}{2}$, be the advanced-chart extension of
[[lem-gr-schwarzschild-extension-chart]]. Write
$q_0:=(v_0,s,\vartheta_0,\varphi_0)$ for a point on the level set $\{r=s\}$
with $\sin\vartheta_0\ne0$. Then:

1. **Metric components and nondegeneracy at the horizon.** In the product
   chart, $g_{\mathrm{ext}}$ has components
   $$g_{vv}=-f(s)=0,\qquad g_{vr}=g_{rv}=1,\qquad g_{\vartheta\vartheta}=s^{2},\qquad g_{\varphi\varphi}=s^{2}\sin^{2}\vartheta_0,\qquad \det(g_{\mathrm{ext}})=-s^{4}\sin^{2}\vartheta_0<0 .$$
   The two-dimensional block $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the
   $(v,r)$ directions is nonsingular with eigenvalues $+1$ and $-1$, and the
   angular directions are positive on $(0,\pi)$; hence $g_{\mathrm{ext}}$ is
   nondegenerate of inertia $(1,3,0)$ at $q_0$ with the same signature
   $(-,+,+,+)$ as in the exterior.
2. **Horizon generator and time orientation.** At $q_0$ the coordinate field
   $\partial_v$ satisfies $g_{\mathrm{ext}}(\partial_v,\partial_v)=-f(s)=0$
   and $g_{\mathrm{ext}}(\partial_v,\partial_r)=1\ne0$, so $\partial_v$ is a
   null direction tangent to the level set $\{r=s\}$ (the generator direction
   of clause (e) of the lemma). At $r=s$ the orientation field is
   $A(s)=\frac{0+\sqrt4}{2}=1$, so $N_{\mathrm{ext}}=\partial_v-\partial_r$,
   with
   $$g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=-2<0,\qquad g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=-1<0 ,$$
   a unit-normalized timelike vector whose pairing with the generator is
   negative: $\partial_v$ is future-directed at the horizon.
3. **Finite curvature at the horizon.** By clause (d) of the lemma the
   Kretschmann scalar of $g_{\mathrm{ext}}$ equals $12s^{2}/r^{6}$ on all of
   $M_{\mathrm{ext}}$, so at $q_0$ its value is $12s^{2}/s^{6}=12/s^{4}$,
   finite and nonzero for every $s>0$.
4. **The chart component still diverges.** In the exterior product chart of
   the datum the component $g_{11}=f(r)^{-1}=(1-s/r)^{-1}$ diverges as
   $r\downarrow s$, while clauses 1 to 3 show that the metric, its
   orientation and the Kretschmann invariant at the same value $r=s$ are
   finite and nondegenerate in the extension. The divergence is therefore a
   property of the exterior chart's coefficient, not of the geometry at
   $q_0$.

## Facts & Assumptions

**Given:** The exterior datum with $s>0$, the extension $(M_{\mathrm{ext}},g_{\mathrm{ext}})$, its advanced chart $(v,r,\vartheta,\varphi)$, the function $f=1-s/r$, the field $N_{\mathrm{ext}}=A(r)\partial_v-\partial_r$ with $A=(f+\sqrt{f^{2}+4})/2$, and the point $q_0=(v_0,s,\vartheta_0,\varphi_0)$ with $\sin\vartheta_0\ne0$.

[L1] On $M_{\mathrm{ext}}$ the components of $g_{\mathrm{ext}}$ are $g_{vv}=-f$, $g_{vr}=g_{rv}=1$, $g_{\vartheta\vartheta}=r^{2}$, $g_{\varphi\varphi}=r^{2}\sin^{2}\vartheta$, all others zero; $g_{\mathrm{ext}}$ is smooth and nondegenerate of inertia $(3,1,0)$ on all of $r>0$; $N_{\mathrm{ext}}$ is a time orientation with $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})<0$ and $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)<0$; the level set $\{r=s\}$ is a smooth null hypersurface with generator direction $\partial_v$; and $\det(g_{\mathrm{ext}})=-r^{4}\sin^{2}\vartheta$ ([[lem-gr-schwarzschild-extension-chart]] clauses (a), (b), (e)).

[L2] The Kretschmann scalar of $g_{\mathrm{ext}}$ equals $R_{abcd}R^{abcd}=12s^{2}/r^{6}$ on all of $M_{\mathrm{ext}}$ ([[lem-gr-schwarzschild-extension-chart]] clause (d)).

[L3] In the exterior product chart $g_{11}=f(r)^{-1}$ with $f(r)=1-s/r$ ([[lem-gr-schwarzschild-metric-properties]] clause (a), [[def-gr-schwarzschild-exterior-model]]).

[L4] $f(s)=0$ and $\sqrt{0+4}=2$, so $A(s)=1$; and $s^{4}\sin^{2}\vartheta_0>0$ because $s>0$ and $\sin\vartheta_0\ne0$ ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[def-interval]]).

## Proof

**Proof technique:** direct; evaluate the extension components and the orientation field at $r=s$, extract the two-dimensional block determinant and eigenvalues, and read the curvature value from the stated identity.

1.1 (Components and determinant.) Substituting $r=s$ in the components of [L1] gives $g_{vv}=-f(s)=0$, $g_{vr}=g_{rv}=1$, $g_{\vartheta\vartheta}=s^{2}$, $g_{\varphi\varphi}=s^{2}\sin^{2}\vartheta_0$; in the ordered basis $(\partial_v,\partial_r,\partial_\vartheta,\partial_\varphi)$ the matrix is block diagonal with the $2\times2$ block $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and the angular block $\operatorname{diag}(s^{2},s^{2}\sin^{2}\vartheta_0)$, so $\det(g_{\mathrm{ext}})=-(1)(s^{2})(s^{2}\sin^{2}\vartheta_0)=-s^{4}\sin^{2}\vartheta_0<0$ by [L4]. The block $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has characteristic polynomial $\lambda^{2}-1$ and eigenvalues $\pm1$, and the angular entries are positive; hence the signature at $q_0$ is one negative and three positive directions, the inertia $(1,3,0)$ of signature $(-,+,+,+)$, and $g_{\mathrm{ext}}$ is nondegenerate there. This is clause 1. [L1, L4, algebra]

1.2 (Generator and orientation.) By [L1] and [L4], $g_{\mathrm{ext}}(\partial_v,\partial_v)=-f(s)=0$ and $g_{\mathrm{ext}}(\partial_v,\partial_r)=1\ne0$, so $\partial_v$ is a null vector whose $r$-component is zero in the chart: it is tangent to $\{r=s\}$ and realizes the generator direction of [L1]. At $r=s$ the coefficient of the orientation field is $A(s)=\frac{f(s)+\sqrt{f(s)^{2}+4}}{2}=1$, so $N_{\mathrm{ext}}=\partial_v-\partial_r$, and $g_{\mathrm{ext}}(N_{\mathrm{ext}},N_{\mathrm{ext}})=g_{vv}-2g_{vr}+g_{rr}=0-2+0=-2<0$, while $g_{\mathrm{ext}}(N_{\mathrm{ext}},\partial_v)=g_{vv}-g_{rv}=0-1=-1<0$. Both signs are those required of a time orientation, and the negative pairing with the null generator makes $\partial_v$ future-directed. This is clause 2. [L1, L4, algebra]

1.3 (Curvature value.) By [L2], at $r=s$ the Kretschmann scalar equals $12s^{2}/s^{6}=12/s^{4}$, which is finite and positive for every $s>0$. This is clause 3. [L2, L4, algebra]

2.1 (Chart divergence.) By [L3], $g_{11}=(1-s/r)^{-1}=\frac{r}{r-s}$ for $r>s$; as $r\downarrow s$ the numerator tends to $s>0$ and the denominator to $0^{+}$, so $g_{11}\to+\infty$. This divergence occurs in the exterior chart at the same value $r=s$ at which clauses 1 to 3 exhibit finite nondegenerate metric and curvature data in the extension, so it is a coordinate artifact of the exterior chart. This is clause 4. [L1, L2, L3, L4, algebra] ∎

## Remarks

- **What the example computes.** The example evaluates the supplied extension formulas at $r=s$; it uses the lemma's identity $K=12s^{2}/r^{6}$ on $M_{\mathrm{ext}}$ rather than extending the exterior-domain computation, and no value of the metric outside the extension's domain $r>0$ is used. No numerical value of $s$, $c$, $G_N$ or $m_*$ and no measurement occurs.
