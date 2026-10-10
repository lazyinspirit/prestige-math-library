---
id: thm-bounded-potential-weak-unique-continuation-in-three-dimensions
kind: theorem
title: Weak unique continuation for bounded potentials in three dimensions
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [lem-three-dimensional-radial-carleman-integer-weight, lem-smooth-bump-between-concentric-euclidean-balls, lem-weak-leibniz-rule-with-a-smooth-factor, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, def-essential-supremum-with-respect-to-a-measure, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-connected-space, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, thm-rational-points-and-boxes-in-rn, lem-product-topology-on-rn, thm-all-norms-on-rn-are-equivalent, def-measure-null-set-and-almost-everywhere, thm-finite-and-countable-subadditivity-of-measures, def-metric-topology, def-metric-ball]
dependency_roles:
  lem-three-dimensional-radial-carleman-integer-weight: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-essential-supremum-with-respect-to-a-measure: mathematical-premise
  def-l-infinity-on-a-measure-space: mathematical-premise
  prop-essential-supremum-is-attained-as-the-least-essential-bound: mathematical-premise
  def-connected-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-rational-points-and-boxes-in-rn: mathematical-premise
  lem-product-topology-on-rn: mathematical-premise
  thm-all-norms-on-rn-are-equivalent: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-ball: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "B. Davey, Quantitative unique continuation for the Laplacian plus a potential (arXiv:1903.04021)"
      url: "https://arxiv.org/pdf/1903.04021"
    - title: "D. Tataru, Carleman estimates, unique continuation and applications (Northwestern University monograph, 1998)"
      url: "https://math.berkeley.edu/~tataru/papers/book.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let
$\Omega\subseteq\mathbb R^3$ be nonempty, open and connected, let
$V\in L^\infty_{\mathrm{loc}}(\Omega)$, and let
$\psi\in H^2_{\mathrm{loc}}(\Omega)$ satisfy $\Delta\psi=V\psi$ in the
distributional sense: $\int_\Omega\psi\,\Delta\varphi\,dx=\int_\Omega V\psi\,\varphi\,dx$
for every $\varphi\in C_c^\infty(\Omega)$, with $\Delta\varphi$ the classical
Laplacian. Here $H^2_{\mathrm{loc}}(\Omega)$ denotes the locally integrable
classes on $\Omega$ whose weak derivatives of every order at most two exist
and are locally square integrable
([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-sobolev-space-wkp-and-its-norm]]); $V\in L^\infty_{\mathrm{loc}}(\Omega)$
means that $V$ is measurable and that $\|V\|_\infty<\infty$ on every compact
subset, with the essential supremum of
[[def-essential-supremum-with-respect-to-a-measure]] and the space of
[[def-l-infinity-on-a-measure-space]]. If $\psi=0$ on a nonempty open subset
of $\Omega$, then $\psi=0$ on $\Omega$. No smoothness, sign, symmetry or decay
hypothesis on $V$ beyond local essential boundedness is used, and no
analyticity is assumed.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]); a
nonempty open connected $\Omega\subseteq\mathbb R^3$; $V\in L^\infty_{\mathrm{loc}}(\Omega)$;
$\psi\in H^2_{\mathrm{loc}}(\Omega)$ with $\Delta\psi=V\psi$ in the
distributional sense; and a nonempty open $U_0\subseteq\Omega$ on which $\psi$
vanishes.

[L1] Radial Carleman lemma: for every integer $s\ge1$ with $\tau=s+1$ and
every $u\in H^2(\mathbb R^3)$ compactly supported in an annulus
$\{0<a\le|x|\le b\}$, the weak Laplacian exists as a locally square integrable
function and $\|r^{-\tau}u\|_2\le\frac2s\|r^{-\tau+2}\Delta u\|_2$
([[lem-three-dimensional-radial-carleman-integer-weight]]).

[L2] Bumps: for $0<\rho<R$ there is a smooth $\chi_0:\mathbb R^3\to[0,1]$
equal to $1$ on $\overline B_\rho(0)$ with support in $B_R(0)$
([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L3] Weak Leibniz rule: for $\eta\in C_c^\infty$ and $u\in W^{k,2}$, the
product $\eta u$ is in $W^{k,2}$ and
$D^\alpha(\eta u)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\eta)D^{\alpha-\beta}u$
for every $|\alpha|\le k$, the derivatives being the locally integrable weak
derivatives ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[L4] Weak derivatives are defined by the signed test identity and
$W^{2,2}$ consists of $L^2$ classes with weak derivatives of order at most two
in $L^2$; $W^{2,2}_{\mathrm{loc}}(\Omega)$ is the corresponding local class
([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-sobolev-space-wkp-and-its-norm]]).

[L5] Essential supremum and $L^\infty$: $\|f\|_\infty=\inf\{M\ge0:|f|\le M\ \mu\text{-a.e.}\}$,
$L^\infty(\mu)$ is the set of measurable $f$ with $\|f\|_\infty<\infty$, and if
$\|f\|_\infty<\infty$ then $|f|\le\|f\|_\infty$ almost everywhere
([[def-essential-supremum-with-respect-to-a-measure]],
[[def-l-infinity-on-a-measure-space]],
[[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L6] Connectedness: a separation of a topological space is an ordered pair of
nonempty disjoint open sets with union the whole space, and the space is
connected when no separation exists; equivalently a connected space has no
nonempty proper clopen subset ([[def-connected-space]]).

[L7] $\mathbb Q^3$ is countable and dense in $\mathbb R^3$, and the open boxes
$\prod_{i<3}(a_i,b_i)$ with rational $a_i<b_i$ form a countable basis for the
topology of $\mathbb R^3$, which coincides with the Euclidean metric topology
([[thm-rational-points-and-boxes-in-rn]],
[[lem-product-topology-on-rn]], [[thm-all-norms-on-rn-are-equivalent]]).

[L8] Null sets and almost everywhere: a measurable set is null if its measure
is zero, and a property holds almost everywhere if its exceptional set is
contained in a null set ([[def-measure-null-set-and-almost-everywhere]]).

[L9] Countable subadditivity: for a sequence of measurable sets,
$\mu(\bigcup_k E_k)\le\sum_k\mu(E_k)$
([[thm-finite-and-countable-subadditivity-of-measures]]).

[L10] Smoothness: $C^k$ mean continuous partial derivatives through order $k$
and $C^\infty$ means $C^k$ for every $k$
([[def-ck-euclidean-maps-and-diffeomorphisms]]); in particular a
$C_c^\infty$ cutoff is $C^2$, so its classical Laplacian is defined.

[L11] Metric topology: $U$ is open in a metric space exactly when every
$x\in U$ has some $r>0$ with the metric ball $B(x,r)$ contained in $U$, and
closed means open complement ([[def-metric-topology]], [[def-metric-ball]]).

**Choice accounting.** Countable Choice is inherited through [L1], which is
the only supplier carrying a choice assumption; the localization, absorption,
zero-set and counting arguments below use no further choice principle.

## Proof

**Proof technique:** direct.

**Given:** The Axiom of Countable Choice, a nonempty open connected
$\Omega\subseteq\mathbb R^3$, $V\in L^\infty_{\mathrm{loc}}(\Omega)$, an
$H^2_{\mathrm{loc}}$ solution $\psi$ of $\Delta\psi=V\psi$ distributionally,
and $\psi=0$ on a nonempty open $U_0\subseteq\Omega$.

1.1 **Localization at a zero point.** Fix $z_0\in U_0$ and choose $r_0>0$ with $B_{r_0}(z_0)\subseteq U_0$ and $R>0$ with $\overline B_R(z_0)\subseteq\Omega$ (both possible by [L11]); translate so that $z_0=0$. Choose $\chi\in C_c^\infty(B_R(0);[0,1])$ with $\chi=1$ on $B_{R/2}(0)$ [L2] and set $u:=\chi\psi$. Since $\psi\in H^2_{\mathrm{loc}}(\Omega)$ and $\chi$ is smooth with compact support in $\Omega$, the weak Leibniz rule [L3] through order two shows that $u$, extended by zero, lies in $H^2(\mathbb R^3)$ with weak Laplacian the square integrable function $\Delta u=\chi\Delta\psi+2\langle\nabla\chi,\nabla\psi\rangle+(\Delta\chi)\psi$; the hypothesis that $\Delta\psi=V\psi$ holds distributionally says exactly that the distribution $\Delta\psi$ is the regular distribution of the locally integrable function $V\psi$, so testing this identity against $\chi\varphi$ for arbitrary $\varphi\in C_c^\infty(\Omega)$ gives $\chi\Delta\psi=\chi V\psi$, and $\chi\in C_c^\infty$ is $C^2$ so its classical Laplacian is defined [L10]. Thus $\Delta u=Vu+e$ as $L^2$ classes with $e:=2\langle\nabla\chi,\nabla\psi\rangle+(\Delta\chi)\psi$, and $e$ is supported in the annulus $\{R/2\le|x|\le R\}$ because $\chi=1$, hence $\nabla\chi=\Delta\chi=0$, on $B_{R/2}(0)$. Finally $u=0$ almost everywhere on $B_{r_0}(0)\subseteq U_0$, so $u$ is compactly supported in the annulus $\{0<r_0\le|x|\le R\}$. [L2, L3, L4, L10, L11]

2.1 **Carleman estimate with the potential split.** Let $M$ be the essential supremum of $|V|$ over $B_R(0)$ with respect to Lebesgue measure [L5]; it is finite because $B_R(0)$ is compactly contained in $\Omega$ and $V\in L^\infty_{\mathrm{loc}}(\Omega)$, and by [L5] one has $|V|\le M$ almost everywhere on $B_R(0)$. Applying [L1] to $u$ with parameter $s\ge1$, $\tau=s+1$, and using $|V|\le M$ together with $r\le R$ on the support of $u$, one has $\|r^{-\tau+2}Vu\|_2\le MR^2\|r^{-\tau}u\|_2$ and therefore $\|r^{-\tau}u\|_2\le\frac2s\bigl(MR^2\|r^{-\tau}u\|_2+\|r^{-\tau+2}e\|_2\bigr)$. [L1, L5, step 1.1]

3.1 **Absorption and the inner-ball bound.** For every integer $s\ge\max\{1,4MR^2\}$ the factor satisfies $2MR^2/s\le1/2$, so absorbing the first term in the estimate of step 2.1 gives $\|r^{-\tau}u\|_2\le\frac4s\|r^{-\tau+2}e\|_2$; since $e$ is supported in $\{R/2\le|x|\le R\}$ where $r^{2-\tau}\le(R/2)^{2-\tau}$ (the exponent $2-\tau\le0$), this yields $\|r^{-\tau}u\|_2\le\frac4s(R/2)^{2-\tau}\|e\|_2$. For every $0<\sigma\le R/2$ one has $u=\psi$ almost everywhere on $B_\sigma(0)$ (because $\chi=1$ on $B_{R/2}(0)$) and $r\le\sigma$ there, so $\|\psi\|_{L^2(B_\sigma(0))}=\|u\|_{L^2(B_\sigma(0))}\le\sigma^\tau\|r^{-\tau}u\|_2\le\frac{4(R/2)^2}{s}\bigl(\frac{2\sigma}{R}\bigr)^{\tau}\|e\|_2$. [step 2.1]

4.1 **Limit and local propagation.** For fixed $\sigma<R/2$ the bound of step 3.1 tends to $0$ as the integer $s\to\infty$, because $\|e\|_2$ is fixed by the localization of step 1.1, $2\sigma/R<1$ and $\tau=s+1$; hence $\psi=0$ almost everywhere on $B_\sigma(0)$ for every $\sigma<R/2$. Since $B_{R/2}(0)$ is the countable union of the balls $B_{R/2-1/n}(0)$, $n\ge1$, and a countable union of null sets is null by [L8] and [L9], it follows that $\psi=0$ almost everywhere on $B_{R/2}(0)$. Restated without the translation: if $z\in\Omega$ has a neighbourhood on which $\psi$ vanishes almost everywhere and $R>0$ satisfies $\overline B_R(z)\subseteq\Omega$, then $\psi=0$ almost everywhere on $B_{R/2}(z)$. [L8, L9, step 3.1]

5.1 **The zero set is open in $\Omega$ and carries no mass.** Let $Z:=\bigcup\{U\subseteq\Omega:U\text{ open},\ \psi=0\text{ a.e. on }U\}$. Then $Z$ is open and nonempty (it contains $U_0$), and $\psi=0$ almost everywhere on $Z$: for $y\in Z$ choose $\varepsilon_y>0$ with $B(y,\varepsilon_y)\subseteq\Omega$ [L11]; step 4.1 with $R=\varepsilon_y/2$ gives that $\psi=0$ almost everywhere on the open ball $B_{\varepsilon_y/4}(y)\subseteq Z$, so these balls cover $Z$; by [L7] each $y\in B_{\varepsilon_y/4}(y)$ is contained in a rational box $Q_y$ with $Q_y\subseteq B_{\varepsilon_y/4}(y)$, the family of all rational boxes obtained this way is countable, and each is a null set for $\psi$ because its exceptional set $\{x:\psi(x)\ne0\}\cap Q_y$ is measurable and contained in the exceptional set of the enclosing ball, which is null by [L8]; since $Z$ is covered by countably many of these boxes, [L9] makes $\{x\in Z:\psi(x)\ne0\}$ null, that is, $\psi=0$ almost everywhere on $Z$. [L7, L8, L9, L11, step 4.1]

5.2 **$\Omega\setminus Z$ is open.** Let $x\in\Omega\setminus Z$ and choose $\varepsilon>0$ with $\overline B(x,\varepsilon)\subseteq\Omega$: [L11] gives $\delta>0$ with $B(x,2\delta)\subseteq\Omega$, and $\overline B(x,\delta)\subseteq B(x,2\delta)\subseteq\Omega$, so $\varepsilon:=\delta$ qualifies. If some $y\in Z\cap B(x,\varepsilon/3)$ existed, then $R:=\varepsilon-|x-y|>2\varepsilon/3$; every $z\in\overline B_R(y)$ satisfies $|z-x|\le|z-y|+|y-x|\le R+|x-y|=\varepsilon$, so $\overline B_R(y)\subseteq\overline B(x,\varepsilon)\subseteq\Omega$, and step 4.1 would give $\psi=0$ almost everywhere on $B_{R/2}(y)$; since $|x-y|<\varepsilon/3<R/2$, the point $x$ lies in that ball, so $x$ would have a neighbourhood on which $\psi$ vanishes almost everywhere, contradicting $x\notin Z$. Hence $B(x,\varepsilon/3)\cap Z=\varnothing$, and $\Omega\setminus Z$ is open. [L11, step 4.1]

6.1 **Conclusion.** The sets $Z$ and $\Omega\setminus Z$ are disjoint, open, and their union is $\Omega$, and $Z$ is nonempty; since $\Omega$ is connected [L6], no separation of $\Omega$ exists, so $\Omega\setminus Z=\varnothing$ and $Z=\Omega$. By step 5.1, $\psi=0$ almost everywhere on $\Omega$, which is the class statement $\psi=0$ on $\Omega$. [L6, step 5.1] ∎
