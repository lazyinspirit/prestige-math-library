---
id: thm-explicit-perturbed-horseshoe-and-transversality
kind: theorem
title: "Explicit persistence: a $C^2$ diffeomorphism $C^1$-close to $F$ has a coded chaotic invariant set, hyperbolic fixed points and transverse homoclinic points"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-bounded-bilateral-sequence-ball-is-complete, def-stable-unstable-cones-and-line-slopes, lem-weighted-tail-contractions-give-c-one-curves, lem-close-map-first-component-has-uniform-inverse, lem-perturbed-scalar-recurrence-root-bounds, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive, def-cm-bilateral-shift-space-and-cylinders, lem-cm-bilateral-shift-metric-and-sequential-compactness, thm-banach-fixed-point, def-metric-continuity, def-metric-convergence, thm-metric-sequential-closure, lem-metric-limits-unique, def-metric-topology, def-dense-top, def-metric-compactness-variants, def-metric-compactness, def-countable-choice, def-dependent-choice, thm-geometric-series, lem-geometric-sequence-null, def-series, def-abs-value, lem-of-abs-value, def-metric-space, def-continuity-real, thm-of-square-roots, def-metric-ball, def-interval, def-lipschitz-holder-contraction]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  lem-weighted-tail-contractions-give-c-one-curves: mathematical-premise
  lem-close-map-first-component-has-uniform-inverse: mathematical-premise
  lem-perturbed-scalar-recurrence-root-bounds: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive: mathematical-premise
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-convergence: mathematical-premise
  thm-metric-sequential-closure: mathematical-premise
  lem-metric-limits-unique: mathematical-premise
  def-metric-topology: mathematical-premise
  def-dense-top: mathematical-premise
  def-metric-compactness-variants: mathematical-premise
  def-metric-compactness: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-geometric-series: mathematical-premise
  lem-geometric-sequence-null: mathematical-premise
  def-series: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-metric-space: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, Theorem statement iv) and Prop. 3-4: for large parameters the invariant set is hyperbolic and conjugate to the shift"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.2, Remark A1.1: transverse self-intersections persist under small perturbations of the Hénon parameters"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Sections 13.1-13.2, the Smale horseshoe and transverse homoclinic theorem"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and put

$$R:=\sqrt a+3,\qquad l:=\sqrt a-3\ge7,\qquad \mathcal Q:=[-R-1,R+1]^2,\qquad \Sigma(x,y):=(y,x).$$

Let $C=C(a,R)$ be the constant of [[lem-perturbed-scalar-recurrence-root-bounds]], let $0<\varepsilon\le1/6$ with $\eta:=C\varepsilon\le1$, and let $U\subseteq\mathbb R^2$ be open with $\mathcal Q\subseteq U$. Let $G=(A,B):U\to\mathbb R^2$ be a $C^2$ diffeomorphism onto its image whose components satisfy, on $\mathcal Q$,

$$|A(x,y)-y|\le\varepsilon,\quad |\partial_xA(x,y)|\le\varepsilon,\quad |\partial_yA(x,y)-1|\le\varepsilon,$$

$$|B(x,y)-(y^2-a-x)|\le\varepsilon,\quad |\partial_xB(x,y)+1|\le\varepsilon,\quad |\partial_yB(x,y)-2y|\le\varepsilon,$$

and assume in addition that $H:=\Sigma\circ G^{-1}\circ\Sigma$ is defined and of class $C^2$ on a neighbourhood of $\mathcal Q$ and satisfies the same six inequalities on $\mathcal Q$ with the same constant $\varepsilon$. For each sign $u$ let $M_u$ be the root map of [[lem-perturbed-scalar-recurrence-root-bounds]] applied to $G$, let $V$ be the inverse branch of [[lem-close-map-first-component-has-uniform-inverse]], and let $M^H_u,V^H$ be the corresponding objects for $H$. Then:

1. **(coding)** for every $s\in X_\pm$ there is exactly one $q(s)\in B_R$ with $q_n(s)=M_{s_n}\bigl(q_{n-1}(s),q_{n+1}(s)\bigr)$ for all $n\in\mathbb Z$; it satisfies $l\le|q_n(s)|\le R$, $\operatorname{sign}q_n(s)=s_n$ and $R-|q_n(s)|\ge\tfrac34$, $|q_n(s)|-l\ge\tfrac34$; setting $v_n(s):=V(q_n(s),q_{n+1}(s))$ and

$$z_n(s):=\bigl(q_n(s),v_n(s)\bigr),\qquad h_G(s):=z_0(s)=\bigl(q_0(s),V(q_0(s),q_1(s))\bigr),$$

one has $G(z_n(s))=z_{n+1}(s)$ for all $n$;
2. **(conjugacy and chaos)** $h_G$ is a continuous bijection of $(X_\pm,D_\pm)$ onto $\Lambda_G:=h_G(X_\pm)$; granting the Axiom of Countable Choice (used once through the equivalence between closed and sequentially closed subsets of $\mathbb R^2$), it is a homeomorphism, and $G\circ h_G=h_G\circ S_\pm$, so $\Lambda_G$ is $G$-invariant. The set $\Lambda_G$ is sequentially compact and is compact under $\mathrm{AC}_\omega+\mathrm{DC}$. Under $\mathrm{AC}_\omega$, $G|_{\Lambda_G}$ is continuous, topologically mixing, and has dense periodic points; it is sensitive with sensitivity constant $2l$. Hence under $\mathrm{AC}_\omega$ it is chaotic in the stated sense.
3. **(fixed points)** for each sign $u$ the constant code $\bar u$ gives a fixed point $z_{\bar u}:=h_G(\bar u)=\bigl(\rho_u,V(\rho_u,\rho_u)\bigr)$, where $\rho_u=M_u(\rho_u,\rho_u)$ is the unique element of $u\,[l,R]$ with $\rho_u=M_u(\rho_u,\rho_u)$; these two fixed points are hyperbolic;
4. **(transverse homoclinic points)** let $s\in X_\pm$ be nonconstant with $s_n=u$ for $|n|\ge N$. Then $z_*:=h_G(s)\ne z_{\bar u}$, and there are $C^1$ curves $\gamma_s,\gamma_u:(-\varepsilon_0,\varepsilon_0)\to\mathbb R^2$ with $\gamma_s(0)=\gamma_u(0)=z_*$, $\gamma_s\bigl((-\varepsilon_0,\varepsilon_0)\bigr)\subseteq W^s_G(z_{\bar u})$, $\gamma_u\bigl((-\varepsilon_0,\varepsilon_0)\bigr)\subseteq W^u_G(z_{\bar u})$, tangent vectors $\gamma_s'(0)\in C^s_{3/4}$, $\gamma_u'(0)\in C^u_{3/4}$; since $C^s_{3/4}\cap C^u_{3/4}=\{0\}$ the tangent lines are distinct, so $z_*$ is a transverse homoclinic point of $z_{\bar u}$ ([[def-stable-unstable-cones-and-line-slopes]]).

## Facts & Assumptions

**Given:** The data $a,R,l,\mathcal Q,\Sigma,\varepsilon,\eta,C$, the maps $G,H$, the root maps $M_u,M^H_u$, the inverse branches $V,V^H$, the shift space $X_\pm$ with metric $D_\pm$ and shift $S_\pm$, the ball $B_R$, and the cones $C^s_k,C^u_k$ and stable/unstable sets of [[def-stable-unstable-cones-and-line-slopes]].

[F1] Root and defect bounds ([[lem-perturbed-scalar-recurrence-root-bounds]]): proof step 5.1 supplies $C^2$ extensions of $M_u$ on an open neighborhood of $[-R,R]^2$; in particular $M_u$ is $C^1$ on $[-R,R]^2$ with values in $u\,[l,R]$, $|\partial_iM_u|\le d$ where $d\le2/13$, $2d\le4/13<1$, $d(\theta+\theta^{-1})\le5/13<1$ for $\theta=1/2$ and $d/(1-d\theta)\le1/6$; the defect $e$ satisfies $|e|,|\partial_ie|\le\eta\le1$ on the cube; every root satisfies the margins $|M_u(u',w')|-l\ge\tfrac34$ and $R-|M_u(u',w')|\ge\tfrac34$, because the endpoint values of $P$ are at least $4\sqrt a-16$ and $4\sqrt a+2$ in absolute value while $|\partial_vP|\le2R+\eta\le2\sqrt a+7$, and $(4\sqrt a-16)/(2\sqrt a+7)\ge\tfrac34$ and $(4\sqrt a+2)/(2\sqrt a+7)\ge\tfrac34$ for $\sqrt a\ge10$; and clause 4 of the same lemma: for all $(u,v,w)\in[-R,R]^3$, $P_{u,w}(v)=0$ if and only if $B(u,V(u,v))=V(v,w)$.

[F2] Inverse-branch estimates ([[lem-close-map-first-component-has-uniform-inverse]]): $V$ is $C^1$ on $[-R,R]^2$ with $|V(q,q')-q'|\le\varepsilon$, $|\partial_qV|\le\varepsilon/(1-\varepsilon)$, $|\partial_{q'}V-1|\le\varepsilon/(1-\varepsilon)$; here $\varepsilon\le1/6$, so $\varepsilon/(1-\varepsilon)\le1/5$ and $1/(1-\varepsilon)\le6/5$.

[F3] Weighted half-tail lemma ([[lem-weighted-tail-contractions-give-c-one-curves]]): under its hypotheses with parameters $\theta,c,q$ and a reference half-orbit, the maps $T_b$ have unique fixed points $u(b)$, the map $b\mapsto u(b)$ is continuously differentiable with $\|du/db\|_\theta\le c/(1-q)$, and every derivative entry satisfies $|d_n|\le\theta^n\,c/(1-q)$.

[F4] Complete ball and contraction ([[lem-bounded-bilateral-sequence-ball-is-complete]], [[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]], [[def-metric-space]]): $B_R$ is a nonempty complete metric space in the supremum distance, and a contraction of it into itself has exactly one fixed point.

[F5] Shift data ([[def-cm-bilateral-shift-space-and-cylinders]], [[lem-cm-bilateral-shift-metric-and-sequential-compactness]], [[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]]): the published two-symbol shift is continuous, mixing, has dense periodic points and is sensitive with constant $1$; its space is sequentially compact without choice and compact under the Axioms of Countable and Dependent Choice; the isometry $\varphi$ of [[lem-bounded-bilateral-sequence-ball-is-complete]] transfers all of this to $X_\pm$ with $S_\pm$.

[F6] Topological vocabulary and sequential closure ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]], [[def-dense-top]], [[def-metric-continuity]], [[def-metric-topology]], [[thm-metric-sequential-closure]], [[lem-metric-limits-unique]], [[def-metric-compactness-variants]], [[def-metric-compactness]], [[def-countable-choice]], [[def-dependent-choice]]): the definitions of mixing, dense periodic points, sensitivity, continuity, open and closed sets, and fixed points; closed subsets of a metric space are exactly the sets containing all limits of their convergent sequences, limits in metric spaces are unique, the implication "closed $\Rightarrow$ sequentially closed" is choice-free, and the converse implication uses the Axiom of Countable Choice once.

[F7] Cones and slope vocabulary ([[def-stable-unstable-cones-and-line-slopes]]): $C^u_{3/4}=\{|u|\le\tfrac34|v|\}$, $C^s_{3/4}=\{|v|\le\tfrac34|u|\}$, and $C^u_{3/4}\cap C^s_{3/4}=\{0\}$; the phase curve of a half-tail with boundary value $b$ and sequence $x_n(b)$ is the map $b\mapsto\bigl(b,V(b,x_0(b))\bigr)$ at the index $-1$.

[F8] Arithmetic and limits ([[def-abs-value]], [[lem-of-abs-value]], [[def-interval]], [[def-continuity-real]], [[thm-geometric-series]], [[lem-geometric-sequence-null]], [[def-series]], [[def-metric-convergence]], [[def-metric-ball]]): the numerical bounds used below, the convergence of geometric sequences, and the fact that the Euclidean distance dominates each coordinate difference.



## Proof

**Proof technique:** direct; run a contraction for the perturbed recurrence, transfer the shift's chaos through the coding homeomorphism as in the unperturbed case, and build the two curves by the weighted half-tail lemma applied to $G$ and to $H=\Sigma G^{-1}\Sigma$.

1.1 Constants: by [F1], $d\le2/13$, $2d\le4/13$, and $d/(1-d\theta)\le1/6$; also $R\ge13$, $l\ge7$, and $R-l=\sqrt a+3-(\sqrt a-3)=6>0$. Setting $\nu:=2d\le4/13<1$. [given, F1, F8, algebra]

2.1 Coded sequence: for $s\in X_\pm$ define $T_s$ on $B_R$ by $(T_sq)_n:=M_{s_n}(q_{n-1},q_{n+1})$. The values lie in $s_n[l,R]\subseteq[-R,R]$ by [F1], so $T_s$ maps $B_R$ into itself; and $\|T_sq-T_sq'\|_\infty\le2d\|q-q'\|_\infty=\nu\|q-q'\|_\infty$ by [F1]. By [F4] and $\nu<1$, $T_s$ has exactly one fixed point $q(s)\in B_R$; and $q_n(s)\in s_n[l,R]$, so $\operatorname{sign}q_n(s)=s_n$. The margins of [F1] give $R-|q_n(s)|\ge\tfrac34$ and $|q_n(s)|-l\ge\tfrac34$. [given, step 1.1, F1, F4, algebra]

3.1 Orbits: with $v_n:=V(q_n(s),q_{n+1}(s))$ of [F2], clause 4 of [F1] states that $P_{u,w}(v)=0$ is equivalent to $B(u,V(u,v))=V(v,w)$. With $(u,v,w)=(q_{n-1}(s),q_n(s),q_{n+1}(s))$, clause 1 gives $P_{u,w}(v)=0$, hence $B(q_{n-1}(s),v_{n-1})=v_n$; and the defining identity of $V$ gives $A(q_{n-1}(s),v_{n-1})=q_n(s)$. Hence $G(q_{n-1}(s),v_{n-1})=(q_n(s),v_n)$, i.e. $G(z_{n-1}(s))=z_n(s)$ for all $n$, and clause 1 is proved. [given, step 2.1, F1, F2]

3.2 Locality and continuity: iterating $T_s$ from $0$, one proves by induction on $m$ that $(T_s^m0)_n$ depends only on the symbols $s_j$ with $|j-n|\le m-1$, exactly as in the unperturbed case, and that $\|T_s^m0-q(s)\|_\infty\le\nu^m\|T_s0\|_\infty/(1-\nu)\le2R\nu^m$ by [F4] and clause 3 of [[thm-banach-fixed-point]]; hence for $s,t$ agreeing on $|j|\le m$ one has $|q_n(s)-q_n(t)|\le4R\nu^{m}$ for $|n|\le1$. By [F2], $|\partial_qV|\le\varepsilon/(1-\varepsilon)\le\tfrac15$ and $|\partial_{q'}V|\le1+\varepsilon/(1-\varepsilon)\le\tfrac65$, so the mean value inequality gives $|V(q_0(s),q_1(s))-V(q_0(t),q_1(t))|\le\tfrac15\cdot4R\nu^m+\tfrac65\cdot4R\nu^m=\tfrac75\cdot4R\nu^m$; with $C_h:=\frac{12}{5}=1+\frac15+\frac65$ one therefore has $\|h_G(s)-h_G(t)\|_2\le\Delta q_0+\Delta V\le4R\,C_h\,\nu^m$ whenever $s,t$ agree on $|j|\le m$. Given $\varepsilon'>0$, choose $m$ with $4R\,C_h\,\nu^m<\varepsilon'$ and $\delta:=2^{-m}$; if $D_\pm(s,t)<2^{-m}$ then ([F5], cylinder property) $s,t$ agree for $|j|\le m$, so $\|h_G(s)-h_G(t)\|_2<\varepsilon'$. This proves continuity of $h_G$. [given, step 2.1, F2, F4, F5, F8, algebra]

3.3 Constant codes: for each sign $u$, the map $\rho\mapsto M_u(\rho,\rho)$ maps the closed interval $u[l,R]$ into itself by [F1] and is a contraction with constant $2d\le4/13<1$; hence it has exactly one fixed point $\rho_u\in u[l,R]$, and the constant sequence $q_n:=\rho_u$ is a fixed point of $T_{\bar u}$, so $q(\bar u)$ is constant and $z_{\bar u}=h_G(\bar u)=(\rho_u,V(\rho_u,\rho_u))$ is a fixed point of $G$. [given, step 2.1, F1, F4, F7]

4.1 Injectivity: if $h_G(s)=h_G(t)$ then $z_0(s)=z_0(t)$; applying the bijection $G$ forward and $G^{-1}$ (which exists because $G$ is a diffeomorphism onto its image, and $z_0(s)$ lies in that image as $G(z_{-1}(s))$) backward gives $z_n(s)=z_n(t)$ for all $n\in\mathbb Z$ by induction; hence $q_n(s)=q_n(t)$ for all $n$, and $s_n=\operatorname{sign}q_n(s)=\operatorname{sign}q_n(t)=t_n$ by [F1], so $s=t$. [given, step 3.1, F1]

4.2 Conjugacy: define $\tilde q_n:=q_{n+1}(s)$. Then $\tilde q$ is a fixed point of $T_{S_\pm s}$, because $(T_{S_\pm s}\tilde q)_n=M_{s_{n+1}}(q_n(s),q_{n+2}(s))=q_{n+1}(s)=\tilde q_n$ by [F1]; by uniqueness $\tilde q=q(S_\pm s)$, i.e. $q_n(S_\pm s)=q_{n+1}(s)$. Hence $G(h_G(s))=G(q_0(s),v_0(s))=(q_1(s),v_1(s))=(q_0(S_\pm s),V(q_0(S_\pm s),q_1(S_\pm s)))=h_G(S_\pm s)$: the conjugacy identity, and $G(\Lambda_G)=\Lambda_G$ follows as in the unperturbed case because $S_\pm$ is bijective. [given, step 3.1, F1, F2]

4.3 Hyperbolicity: put $M:=DG(z_{\bar u})$, $E:=M-DF(z_{\bar u})=\begin{pmatrix}a_{11}&a_{12}\\b_1&b_2\end{pmatrix}$ and $v_u:=V(\rho_u,\rho_u)$. At $z_{\bar u}$ the six closeness hypotheses give $|a_{11}|,|a_{12}|,|b_1|\le\varepsilon$ and $|b_2|\le\varepsilon$, while [F2] gives $|v_u-\rho_u|\le\varepsilon$ and $|v_u|\le R+1$. Since $DF(x,y)=\begin{pmatrix}0&1\\-1&2y\end{pmatrix}$, expanding trace and determinant of $M=DF(z_{\bar u})+E$ gives $\operatorname{tr}M=2v_u+a_{11}+b_2,\qquad \det M=1+a_{11}(2v_u+b_2)+a_{12}-b_1-a_{12}b_1,$ so $|\operatorname{tr}M-2\rho_u|\le4\varepsilon$ and $|\det M-1|\le(2R+4)\varepsilon+2\varepsilon^2\le(2l+16)\varepsilon+2\varepsilon^2$. Because $\varepsilon\le\tfrac16$ and $l\ge7$, $|\operatorname{tr}M|\ge2l-4\varepsilon\ge2l-\tfrac23,\qquad |\det M|\le1+\tfrac{2l+16}{6}+\tfrac{2}{36}=\tfrac l3+\tfrac{67}{18},$ and the discriminant is bounded below by $\operatorname{tr}^2M-4\det M\ \ge\ \bigl(2l-\tfrac23\bigr)^2-4\Bigl(1+\tfrac{2l+16}{6}+\tfrac{2}{36}\Bigr)\ =\ 4l^2-4l-\tfrac{130}{9}\ >\ 0,$ since $4l^2-4l=168$ at $l=7$ and $l\mapsto4l^2-4l$ is increasing for $l\ge1$. Hence the eigenvalues are real. Let $\lambda_+$ be the one of larger modulus; then $|\lambda_+|\ge\tfrac12|\operatorname{tr}M|\ge l-\tfrac13>1$, and $|\lambda_-|=\frac{|\det M|}{|\lambda_+|}\le\frac{2|\det M|}{|\operatorname{tr}M|}\le\frac{2\bigl(\tfrac l3+\tfrac{67}{18}\bigr)}{2l-\tfrac23}<1,$ the last inequality being equivalent to $\tfrac{73}{18}<\tfrac{2l}{3}$, which holds because $l\ge7$ and $\tfrac{14}{3}>\tfrac{73}{18}$. Thus $|\lambda_+|>1>|\lambda_-|\ge0$: $z_{\bar u}$ is hyperbolic. [given, step 3.3, F1, F2, F8, algebra]

4.4 Tail convergence: suppose $s_n=u$ for all $|n|\ge N$, and let $m\ge0$. For $n\ge N+m+1$ every $j$ with $|j-n|\le m-1$ satisfies $j>N$, so $(T_s^m0)_n=(T_{\bar u}^m0)_n$; for $n\le-N-(m+1)$ every such $j$ satisfies $j<-N$, so again $(T_s^m0)_n=(T_{\bar u}^m0)_n$. Hence, by the uniform error estimate of step 3.2 and $q(\bar u)$ constant by step 3.3, $|q_n(s)-\rho_u|\le4R\nu^m$ whenever $|n|\ge N+m+1$. Letting $m\to\infty$ gives $q_n(s)\to\rho_u$ as $n\to\pm\infty$; consequently $z_n(s)\to(\rho_u,V(\rho_u,\rho_u))=z_{\bar u}$ in both directions, by continuity of $V$ ([F2]). [step 3.2, step 3.3, F2, F8]

5.1 Topology: let $C\subseteq X_\pm$ be closed. A sequence in $C$ has a subsequence converging in the sequentially compact space $X_\pm$ ([F5] and the isometry $\varphi$ of [F6]), and its limit lies in $C$ because closed sets are sequentially closed by the choice-free direction of [F6]; hence $C$ is sequentially compact. The continuous image $h_G(C)$ is sequentially compact: given a sequence $(h_G(x_k))$ with $x_k\in C$, pick a subsequence $x_{k_j}\to x\in C$ and use continuity of $h_G$; hence $h_G(C)$ is sequentially closed (any convergent sequence in it has a subsequence converging to a point of $h_G(C)$, and limits are unique by [F6]), and by the $\mathrm{AC}_\omega$ direction of [F6] it is closed in $\mathbb R^2$. Thus $h_G$ is a closed map, so $h_G^{-1}$ is continuous. Under the Axioms of Countable and Dependent Choice, $X_\pm$ is compact by [F5] and $h_G(X_\pm)=\Lambda_G$ is a continuous image of it, hence compact. [given, step 3.2, step 4.1, F5, F6]

5.2 Stable curve for $G$: let $s$ be nonconstant with $s_n=u$ for $|n|\ge N$, and set $y_n:=q_{n+1}(s)$ for $n\ge0$, $b_*:=q_0(s)$. Then $y_n=M_{s_{n+1}}(y_{n-1},y_{n+1})$ for $n\ge0$ with $y_{-1}:=b_*$, and $|y_n|\in[l+\tfrac34,R-\tfrac34]$ by [F1]. Apply [[lem-weighted-tail-contractions-give-c-one-curves]] with $\theta=1/2$, $c=d\le2/13$, $q=d(\theta+\theta^{-1})\le5/13<1$, $J=[-R,R]$, $\bar\rho=\tfrac12$, $\delta_*=\tfrac14$, and update $M_{s_{n+1}}$. The half-orbit margin follows from the root margins, $[b_* -\delta_*,b_*+\delta_*]\subseteq J$ follows from $|q_0(s)|\le R-\tfrac34$, and $\delta_*<(1-q)\bar\rho/d$ because $d\le2/13$. By [F3] there is a $C^1$ family $u(b)$ with $|d_0|\le d/(1-q)\le1/4$, and the phase curve $Z(b):=(b,V(b,y_0+u_0(b)))$ through $Z(b_*)=(q_0(s),V(q_0(s),q_1(s)))=z_*$ has tangent $(1,T)$ with $T=\partial_qV(b_*,y_0)+\partial_{q'}V(b_*,y_0)d_0,\qquad |T|\le\frac{\varepsilon}{1-\varepsilon}+\frac{1}{1-\varepsilon}\cdot\frac14\le\frac15+\frac65\cdot\frac14=\frac12\le\frac34.$ Thus the tangent lies in $C^s_{3/4}$. The recurrence coordinates remain in $[-R,R]$ by the weighted-ball construction; their phase points $(x_n,V(x_n,x_{n+1}))$ lie in $\mathcal Q\subseteq U$ because $|V(x_n,x_{n+1})|\le R+\varepsilon<R+1$. Step 3.1 therefore gives every forward iterate without leaving the domain of $G$. Every point $Z(b)$ has forward orbit tracking that of $z_*$, which converges to $z_{\bar u}$ by step 4.4; hence these points lie in $W^s_G(z_{\bar u})$ near $b_*$. [given, step 2.1, step 3.3, step 4.4, F1, F2, F3, F7, F8, algebra]

5.3 Sensitivity: let $s\in X_\pm$ and let $r>0$. Choose $m\ge0$ such that $4R C_h\nu^m<r$, using $0<\nu<1$ from step 1.1, and define $t\in X_\pm$ by $t_j=s_j$ for $j\ne m+1$ and $t_{m+1}=-s_{m+1}$. Since $s,t$ agree on $|j|\le m$, the estimate in step 3.2 gives $\|h_G(s)-h_G(t)\|_2<r$. At coordinate $0$, the codes $S_\pm^{m+1}s$ and $S_\pm^{m+1}t$ have opposite signs; by [F1] their coded first coordinates have opposite signs and absolute values at least $l+\tfrac34$. Therefore $\bigl\|h_G(S_\pm^{m+1}s)-h_G(S_\pm^{m+1}t)\bigr\|_2\ge 2(l+\tfrac34)>2l.$ Iterating the conjugacy of step 4.2 identifies these two points with $G^{m+1}(h_G(s))$ and $G^{m+1}(h_G(t))$. Thus for every point of $\Lambda_G$ and every radius $r>0$ there is a point within distance $r$ whose forward iterates are separated by at least $2l$, proving sensitivity with constant $2l$ under the definition in [F6]. [step 1.1, step 3.2, step 4.2, F1, F6, algebra]

6.1 Mixing and dense periodic points: $G$ is $C^2$ on an open set containing $\Lambda_G$, so its restriction to $\Lambda_G$ is continuous. Under $\mathrm{AC}_\omega$, $h_G$ is a homeomorphism by step 5.1. If $U,V\subseteq\Lambda_G$ are nonempty and relatively open, then $h_G^{-1}(U)$ and $h_G^{-1}(V)$ are nonempty open subsets of $X_\pm$. The shift $S_\pm$ is topologically mixing by [F5], so there is $N$ such that $S_\pm^n(h_G^{-1}(U))\cap h_G^{-1}(V)\ne\varnothing$ for all $n\ge N$. By the conjugacy in step 4.2, this gives $G^n(U)\cap V\ne\varnothing$ for all $n\ge N$, proving mixing. The same conjugacy and injectivity show that $h_G$ maps periodic shift codes exactly to periodic points of $G|_{\Lambda_G}$; since periodic shift codes are dense by [F5] and $h_G$ is a homeomorphism, these periodic points are dense in $\Lambda_G$. [given, step 4.2, step 4.1, step 5.1, F5, F6]

6.2 Backward orbit under $H$: put $w:=\Sigma(z_*)$ and $w_n:=H^n(w)$ for $n\in\mathbb Z$; since $H=\Sigma\circ G^{-1}\circ\Sigma$, one has $w_n=\Sigma(z_{-n})$, so its coordinates are $(w_n)_1=v_{-n}(s)$, $(w_n)_2=q_{-n}(s)$; in particular $(w_n)_1\in u'\,[l+\tfrac7{12},R-\tfrac7{12}]$ because $|v_m(s)-q_{m+1}(s)|\le\varepsilon\le\tfrac16$ and $|q_{m+1}(s)|\in[l+\tfrac34,R-\tfrac34]$ by [F1] and [F2]. Set $x_n:=(w_n)_1$. By definition of the inverse branch $V^H$ of the first component $H_1$ of $H$, the orbit relations $H_1(w_{n-1})=(w_n)_1$, $H_2(w_{n-1})=(w_n)_2$ say $V^H(x_{n-1},x_n)=(w_{n-1})_2$ and $H_2\bigl(x_{n-1},V^H(x_{n-1},x_n)\bigr)=V^H(x_n,x_{n+1})$; by clause 4 of [F1] applied to $H$, this gives $P^H_{x_{n-1},x_{n+1}}(x_n)=0$, and $x_n$ lies in $\operatorname{sign}(x_n)[l,R]$ by the margin bound, so by clause 1 of [F1] applied to $H$, $x_n=M^H_{\operatorname{sign}x_n}\bigl(x_{n-1},x_{n+1}\bigr)\qquad(n\in\mathbb Z).$ [given, step 3.1, step 5.2, F1, F2, F8, algebra]

7.1 Unstable curve for $G$: shift the $H$-reference to $y'_n:=x_{n+1}$ $(n\ge0)$ with $y'_{-1}:=x_0=v_0(s)$, and apply [[lem-weighted-tail-contractions-give-c-one-curves]] to $H$ with $\theta=1/2$, $c=d$, $q\le5/13$, $J=[-R,R]$, $\bar\rho=\tfrac12$, and $\delta_*=\tfrac14$. The reference recurrence holds by step 6.2. Its margins satisfy $|y'_n|\ge l+\tfrac34-\varepsilon\ge l+\tfrac7{12}>l+\tfrac12$ and $|y'_n|\le R-\tfrac34+\varepsilon\le R-\tfrac7{12}<R-\tfrac12$; also $|y'_{-1}|=|v_0(s)|\le R-\tfrac7{12}$, so the margin and parameter interval conditions hold. Moreover $\delta_*<(1-q)\bar\rho/d$ because $d\le2/13$. By [F3] we obtain a $C^1$ recurrence curve $\gamma_H(b)=(b,y'_0+u_0(b))$; composing with the $H$-phase map gives $Z^H(b):=(b,V^H(b,y'_0+u_0(b)))$ through $Z^H(y'_{-1})=(v_0(s),V^H(v_0(s),v_{-1}(s)))=w$, with tangent $(1,T^H)$ and $|T^H|\le1/5+(6/5)(1/4)=1/2$. The reference orbit $w_n=\Sigma(z_{-n})$ converges to $\Sigma(z_{\bar u})$ by step 4.4, so the tracked points lie in $W^s_H(\Sigma(z_{\bar u}))$. Thus $\gamma_u(t):=\Sigma(Z^H(v_0(s)+t))$ for sufficiently small $|t|$ is a $C^1$ curve through $z_*$ in $W^u_G(z_{\bar u})$, since $G^{-n}(\Sigma\xi)=\Sigma H^n(\xi)\to\Sigma(\Sigma(z_{\bar u}))=z_{\bar u}$. Its tangent is $\Sigma(1,T^H)=(T^H,1)\in C^u_{3/4}$. Finally $z_*\ne z_{\bar u}$ because $h_G$ is injective by step 4.1 and $s\ne\bar u$. [given, step 4.1, step 4.4, step 5.2, step 6.2, F1, F2, F3, F7, algebra]

8.1 Conclusion: clause 1 is step 3.1; clause 2 consists of step 3.2 (continuity), step 4.1 (injectivity), step 4.2 (conjugacy), step 5.1 (homeomorphism and compactness), and step 6.1 (mixing and density of periodic points), with the topological transfers conditional on $\mathrm{AC}_\omega$; the sensitivity assertion is step 5.3. Clause 3 consists of step 3.3 (constant codes) and step 4.3 (hyperbolicity). Clause 4 consists of step 4.4 (tail convergence), step 5.2 (stable curve), step 6.2 (backward orbit), and step 7.1 (unstable curve): choose $\varepsilon_0>0$ smaller than both parameter-neighbourhood radii and define $\gamma_s(t):=Z(b_*+t)$ and $\gamma_u(t):=\Sigma(Z^H(v_0(s)+t))$ for $|t|<\varepsilon_0$. Then both curves pass through $z_*$, are injective because their first coordinate is their parameter and $\Sigma$ is invertible, lie in the respective stable and unstable sets, and have tangents in $C^s_{3/4}$ and $C^u_{3/4}$. Those cones intersect only at zero, so the tangent lines are distinct and $z_*$ is transverse. [step 3.1, step 6.1, step 5.3, step 4.3, step 7.1, F7] ∎


## Remarks

- The theorem is deliberately explicit: the constants $d\le2/13$, $q\le5/13$, the margins $\ge\tfrac34$ and the cone aperture $3/4$ are all uniform for $a\ge100$ and $\varepsilon\le1/6$, so the hypothesis on $\varepsilon$ is a finite, checkable condition rather than an abstract smallness statement. The genuine smallness requirement is only $\eta=C\varepsilon\le1$ together with $\varepsilon\le1/6$.

- The second hypothesis, that $H=\Sigma G^{-1}\Sigma$ is again close to $F$, is what makes the unstable curve available by the same forward half-tail construction. It is verified for the smooth periodic oscillator in [[lem-rescaled-pulse-map-is-c-one-close-to-kick]].

- No structural-stability theorem is invoked: the coded set, its conjugacy with the shift and the two curves are constructed directly.
