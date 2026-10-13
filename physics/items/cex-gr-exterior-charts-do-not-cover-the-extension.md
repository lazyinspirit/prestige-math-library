---
id: cex-gr-exterior-charts-do-not-cover-the-extension
kind: counterexample
title: "The exterior Schwarzschild charts do not cover the horizon-crossing extension: the regular horizon point (v, r) = (0, s)"
status: published
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-extension-chart, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-natural-logarithm, cor-exponential-is-a-bijection-onto-positive-reals, def-derivative, def-rational-power, def-interval, thm-exponential-is-strictly-increasing]
dependency_roles:
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-extension-chart: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-natural-logarithm: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  def-derivative: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 6.1.3-6.1.4: the tortoise coordinate r_* = r + 2GM log((r-2GM)/2GM), its divergence as r -> 2GM and the change to regular horizon-crossing coordinates, printed pp. 238-247 (PDF pp. 245-254)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the tortoise coordinate, Eddington-Finkelstein and Kruskal coordinates, and the statement that the Schwarzschild coordinates break down at the horizon, printed pp. 184-189 (PDF pp. 191-196)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $(M,g,N)$ be the Schwarzschild exterior datum with
$s>0$ and let $(M_{\mathrm{ext}},g_{\mathrm{ext}})$ be the horizon-crossing
extension of [[lem-gr-schwarzschild-extension-chart]]. Then every point of
$M_{\mathrm{ext}}$ lies in the image of the exterior datum under the embedding
$\Phi(x^{0},r,\omega)=(x^{0}+r_{*}(r),r,\omega)$, hence in the domain of some
Schwarzschild (product) chart of the datum; equivalently, every point added by
the extension is reached at a bounded value of the exterior coordinate
$x^{0}$."

The counterexample is the point

$$q_0:=(v,r,\vartheta,\varphi)=(0,s,\vartheta_0,\varphi_0)\in M_{\mathrm{ext}},\qquad \sin\vartheta_0\ne0,$$

on the level set $\{r=s\}$, and the following three facts refute both forms of
the statement:

1. $q_0\notin\Phi(M)$: the map $\Phi$ preserves the function $r$, so
   $r(\Phi(p))=r(p)>s$ for every $p\in M$, whereas $r(q_0)=s$.
2. $q_0$ is a regular point of a smooth Lorentzian manifold, not a boundary
   artifact: at $q_0$ one has $\det(g_{\mathrm{ext}})=-s^{4}\sin^{2}\vartheta_0\ne0$,
   the inertia is $(3,1,0)$, and the Kretschmann scalar is
   $12s^{2}/r^{6}=12/s^{4}$, finite and nonzero.
3. Every sequence $p_n\in M$ with $\Phi(p_n)\to q_0$ must have
   $r(p_n)\to s$ and exterior coordinate
   $x^{0}(p_n)=v_n-r_{*}(r(p_n))\to+\infty$, where $v_n:=v(\Phi(p_n))\to v_0=0$; so the exterior coordinate
   $x^{0}$ is unbounded along the approach to $q_0$, and the second form of
   the statement ("bounded $x^{0}$") fails as well.

## Facts & Assumptions

**Given:** The exterior datum with $s>0$, its tortoise function $r_*(r)=r+s\log|r/s-1|$ on $(s,\infty)$, the extension $(M_{\mathrm{ext}},g_{\mathrm{ext}})$ with chart $(v,r,\vartheta,\varphi)$, the embedding $\Phi(x^{0},r,\omega)=(x^{0}+r_{*}(r),r,\omega)$, and the point $q_0=(0,s,\vartheta_0,\varphi_0)$ with $\sin\vartheta_0\ne0$.

[L1] $\Phi$ restricts to a diffeomorphism of $M$ onto the open subset $\{r>s\}$ of $M_{\mathrm{ext}}$ and $\Phi^{*}g_{\mathrm{ext}}=g$; on this subset the chart function $r$ of $M_{\mathrm{ext}}$ pulls back to the radial coordinate $r$ of the datum, and $v=x^{0}+r_*(r)$ ([[lem-gr-schwarzschild-extension-chart]] clauses (a)-(c), [[def-gr-schwarzschild-exterior-model]] clauses (b)-(c)).

[L2] $g_{\mathrm{ext}}$ is smooth and nondegenerate of inertia $(3,1,0)$ on all of $M_{\mathrm{ext}}$, $\det(g_{\mathrm{ext}})=-r^{4}\sin^{2}\vartheta$ in every spherical-polar product chart, and the Kretschmann scalar of $g_{\mathrm{ext}}$ equals $12s^{2}/r^{6}$ on $M_{\mathrm{ext}}$ ([[lem-gr-schwarzschild-extension-chart]] clauses (a), (d), (e), [[def-gr-smooth-lorentzian-objects]], [[def-gr-smooth-covariant-two-tensor-field]]).

[L3] On $(s,\infty)$ the tortoise function satisfies $r_*(r)=r+s\log(r/s-1)$; $\log$ is the inverse of the strictly increasing bijection $\exp:\mathbb R\to(0,\infty)$, so for every $M\in\mathbb R$ the inequality $\log t<-M$ is equivalent to $t<e^{-M}$ for $t>0$; hence $\log t\to-\infty$ as $t\downarrow0$ ([[def-natural-logarithm]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[thm-exponential-is-strictly-increasing]], [[def-derivative]], [[def-rational-power]], [[def-interval]]).

## Counterexample

**Proof technique:** direct; use that $\Phi$ preserves $r$ to separate $q_0$ from the image, exhibit the regular data at $q_0$, and solve $v_0=x^{0}+r_{*}(r)$ for $x^{0}$ along $r\downarrow s$.

1.1 ($q_0$ is not in the image of the exterior datum.) Let $p\in M$ with $p=(x^{0},r,\omega)$. By [L1], $\Phi(p)=(x^{0}+r_{*}(r),r,\omega)$, whose third-to-second chart entry equals the radial coordinate $r(p)$ of the datum, and $r(p)>s$ because the domain of the datum is $\{r>s\}$ ([[def-gr-schwarzschild-exterior-model]] clause (b)). At $q_0$ the extension chart has $r(q_0)=s$; if $q_0=\Phi(p)$ then $s=r(q_0)=r(p)>s$, a contradiction. Hence $q_0\notin\Phi(M)$, and since every product chart of the datum is a chart of $M$, no Schwarzschild chart of the datum contains $q_0$. This is clause 1. [L1, algebra]

1.2 ($q_0$ is a regular point.) By [L2], $\det(g_{\mathrm{ext}})(q_0)=-s^{4}\sin^{2}\vartheta_0$, which is nonzero because $s>0$ and $\sin\vartheta_0\ne0$; the inertia at $q_0$ is $(3,1,0)$, and the Kretschmann scalar there is $12s^{2}/s^{6}=12/s^{4}$, finite and positive. So $q_0$ is an interior point of a smooth nondegenerate Lorentzian four-manifold on which all stated curvature data are finite; in particular the failure of the product charts to cover $q_0$ is not due to $q_0$ being a singularity or a boundary point of the extension. This is clause 2. [L2, algebra]

2.1 (The exterior coordinate is unbounded.) Let $p_n\in M$ be a sequence with $\Phi(p_n)\to q_0$. By [L1] the first chart coordinate of $\Phi(p_n)$ is $v_n=x^{0}(p_n)+r_{*}(r(p_n))$ and the second is $r_n=r(p_n)$; convergence to $q_0=(0,s,\vartheta_0,\varphi_0)$ forces $r_n\to s$ and $v_n\to0$. Then $x^{0}(p_n)=v_n-r_{*}(r_n)$. Since $r_n>s$ for all $n$ and $r_n\to s$, the argument $r_n/s-1$ tends to $0^{+}$, so by [L3] $\log(r_n/s-1)\to-\infty$ and hence $r_{*}(r_n)=r_n+s\log(r_n/s-1)\to-\infty$; therefore $x^{0}(p_n)=v_n-r_{*}(r_n)\to+\infty$. More explicitly, for every bound $B$ there is $n_0$ with $r_{*}(r_n)<-B-|v_n|$ for $n\ge n_0$, whence $x^{0}(p_n)>B$: the exterior coordinate $x^{0}$ is unbounded above along the approach. This is clause 3. [L1, L3, step 1.1, algebra]

3.1 (An approach exists.) For each integer $n\ge1$ set $r_n=s+s/n$ and $p_n=(-r_*(r_n),r_n,\omega_0)$, with $\omega_0$ the fixed angular point of $q_0$. Then $p_n\in M$ and $\Phi(p_n)=(0,r_n,\omega_0)\to q_0$, so the limiting assertion of step 2.1 is nonvacuous. Together with steps 1.1 and 1.2, this refutes both claimed properties at the specified regular horizon point. [L1, step 1.1, step 1.2, step 2.1, construct] ∎

## Remarks

- **What the counterexample says.** The horizon point $q_0$ lies in the closure of $\Phi(M)$ in $M_{\mathrm{ext}}$ but not in $\Phi(M)$; it is a regular point of the extension and requires a genuinely different chart, whose existence is the content of the cited extension lemma. The refuted statement is not that the exterior chart fails somewhere — the cited lemma proves its regularity on $r>s$ — but that the charts of the exterior datum suffice for the extension. No value of $s$, $c$, $G_N$ or $m_*$, no numerical integration and no measurement occurs.
