---
id: lem-local-boundary-separator-for-strongly-pseudoconvex-domain
kind: lemma
title: A strictly pseudoconvex boundary point has a local holomorphic separator
status: published
origin: pipeline
deps:
  - def-levi-form-and-strict-plurisubharmonicity
  - def-levi-pseudoconvex-domain
  - lem-levi-pseudoconvexity-is-independent-of-defining-function
  - cor-second-order-taylor-expansion-with-the-hessian
  - def-wirtinger-operators-in-several-complex-variables
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.2, formula (3.1) and the local construction of the separator $f_p$, printed p. 76; §3.2.4, printed pp. 74-75, strong convexity of regular level sets."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §7.C, Levi form of the boundary (7.12)-(7.13) and Exercise 8.12(b),(c), printed pp. 61-62; the local model Re w_n + sum lambda_j |w_j|^2 + o(|w|^2) with lambda_n freely assignable."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $D\subseteq\mathbb C^n$, $n\ge1$, be a
domain and let $p\in\partial D$ be a boundary point such that $\partial D$ is
of class $C^2$ near $p$ and **strongly pseudoconvex at $p$**. In this
item, $z_j$ denotes the canonical coordinate $z_{j-1}$ for $1\le j\le n$,
with the same relabeling for derivatives and form coefficients. There are a
neighbourhood $U$ of $p$ and a $C^2$ function $\rho:U\to\mathbb R$ with
$$D\cap U=\{z\in U:\rho(z)<0\},\qquad d\rho(p)\ne0,$$
and
$$\mathcal L_\rho(p;v)>0\qquad\text{for every }v\ne0 \text{ with }\sum_{j=1}^n\frac{\partial\rho}{\partial z_j}(p)v_j=0 .$$

Then there are a neighbourhood $V\subseteq U$ of $p$ and a holomorphic
function $h:V\to\mathbb C$ such that
$$h(p)=0\qquad\text{and}\qquad \operatorname{Re}h(z)<0 \text{ for every }z\in(D\cap V)\setminus\{p\}.$$

In particular $h$ has no zero on $(D\cap V)\setminus\{p\}$. Moreover the
separator is quantitative in suitable coordinates: there are a holomorphic
chart $w$ centred at $p$, a radius $\delta>0$ and a constant $c>0$ such that
$h=w_n$ in this chart and $\operatorname{Re}w_n\le -c|w|^2$ at every point of
$D$ corresponding to $|w|<\delta$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a domain $D\subseteq\mathbb C^n$; a boundary point $p\in\partial D$ with $C^2$ boundary near $p$; a $C^2$ defining function $\rho$ on a neighbourhood $U$ of $p$ with $D\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)>0$ for every nonzero complex tangent vector $v$ at $p$.

[F1] For $u\in C^2$ open set and $a$, $v$ as above, the Levi form is $$\mathcal L_u(a;v):=\sum_{j,k}\frac{\partial^2u}{\partial z_j\partial\bar z_k}(a)v_j\overline{v_k},$$ and $u$ is strictly plurisubharmonic when $\mathcal L_u(a;v)>0$ for all $a$ and all $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F2] With $\rho$ a $C^2$ defining function of a domain on a neighbourhood of a boundary point $p$, the complex tangent vectors at $p$ are those with $\sum_j\rho_{z_j}(p)v_j=0$, and the Levi form is evaluated on that subspace ([[def-levi-pseudoconvex-domain]]).

[F3] Two $C^2$ defining functions near the same boundary point have Levi forms on complex tangent vectors differing by a positive scalar factor; in particular the strict positivity demanded at $p$ does not depend on the choice of $\rho$ ([[lem-levi-pseudoconvexity-is-independent-of-defining-function]]).

[F4] For a $C^2$ scalar field near $a$, $$f(a+h)=f(a)+\nabla f(a)\cdot h+\tfrac12\langle H_f(a)h,h\rangle+o(\|h\|^2)$$ ([[cor-second-order-taylor-expansion-with-the-hessian]]).

[F5] The Wirtinger operators in several variables satisfy $$Df(a)h=\sum_{k}\Bigl(\bigl(\partial_{z_k}f(a)\bigr)h_k+\bigl(\partial_{\bar z_k}f(a)\bigr)\overline{h_k}\Bigr)$$ for real totally differentiable $f$, and $\rho$ real-valued is recovered from its Wirtinger partials by this identity ([[def-wirtinger-operators-in-several-complex-variables]]).

[F6] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis stated in the lemma. The normalization, the multiplication by the positive function $g$, the choice of the polynomial $q$ and the final pullback are all explicit formulas, so neither [F6] nor any weaker selection principle is consumed by the construction itself; the cited suppliers are used as stated.

## Proof

**Proof technique:** direct.

1.1 With $U$ and $\rho$ as given, the only rephrasing needed is the description of the complex tangent space: by [F2] the complex tangent vectors at $p$ form the kernel of the $\mathbb C$-linear form $\ell(v):=\sum_a\rho_{z_a}(p)v_a$, and $\ell\ne0$ because $d\rho(p)\ne0$ (if all Wirtinger partials of $\rho$ vanished at $p$, then $D\rho(p)=0$ by [F5]); relabel the indices so that $\rho_{z_n}(p)\ne0$, so that $\ker\ell$ has complex dimension $n-1$ and the hypothesis of the statement says that $\sum_{a,b}\rho_{z_a\bar z_b}(p)v_a\overline{v_b}>0$ for every $0\ne v\in\ker\ell$. The Axiom of Choice [F6] is the ambient hypothesis of the statement, and this step selects nothing. [F2, F5, F6, given]

2.1 Expansion of $\rho$ at $p$ in complex notation: applying the second-order Taylor expansion [F4] to the $C^2$ function $\rho$ and rewriting its linear and quadratic terms with the differential identity of [F5] (for the linear term $D\rho(p)h=\sum_a(\rho_{z_a}(p)h_a+\rho_{\bar z_a}(p)\overline{h_a})=2\operatorname{Re}\ell(h)$, because $\rho$ is real; for the quadratic term, substituting the real coordinates $\xi_a=(h_a+\overline{h_a})/2$ and $\eta_a=(h_a-\overline{h_a})/(2i)$ into the real Hessian form and collecting the $h_ah_b$, $h_a\overline{h_b}$, $\overline{h_a}\overline{h_b}$ terms), one obtains with $\ell(h):=\sum_a\rho_{z_a}(p)h_a$, $A(h):=\sum_{a,b}\rho_{z_az_b}(p)h_ah_b$ and $Q_0(h):=\sum_{a,b}\rho_{z_a\bar z_b}(p)h_a\overline{h_b}$ the expansion $\rho(p+h)=2\operatorname{Re}\ell(h)+\operatorname{Re}A(h)+Q_0(h)+o(|h|^2)$ as $h\to0$. [F4, F5, step 1.1, algebra]

3.1 First normalization: define the holomorphic affine map $\Phi$ by $\Phi(\zeta)_a:=p_a+\zeta_a$ for $1\le a<n$ and $\Phi(\zeta)_n:=p_n+c\bigl(\zeta_n-2\sum_{1\le a<n}\rho_{z_a}(p)\zeta_a\bigr)$ with $c:=(2\rho_{z_n}(p))^{-1}$, so that $\ell(\Phi(\zeta)-p)=\zeta_n/2$ and the Jacobian of $\Phi$ is triangular with diagonal entries $1$ and $c\ne0$; shrinking $U$ makes $\Phi$ a biholomorphism onto a neighbourhood of $0$, and $\rho_1:=\rho\circ\Phi$ is a $C^2$ defining function of $D_1:=\Phi^{-1}(D\cap U)$ near $0$ with expansion $\rho_1(\zeta)=\operatorname{Re}\zeta_n+Q_1(\zeta)+\operatorname{Re}A_1(\zeta)+o(|\zeta|^2)$ from step 2.1, where $Q_1(\zeta)=\sum_{a,b}\rho_{1,\zeta_a\bar\zeta_b}(0)\zeta_a\overline{\zeta_b}$ and $A_1(\zeta)=\sum_{a,b}\rho_{1,\zeta_a\zeta_b}(0)\zeta_a\zeta_b$. The hypothesis survives: $\ell_1(w):=\sum_a\rho_{1,\zeta_a}(0)w_a$ equals $\ell(Lw)=w_n/2$ for the linear part $L$ of $\Phi$, and for $v\ne0$ with $\ell_1(v)=0$ the chain rule gives $Lv\in\ker\ell\setminus\{0\}$ together with $\mathcal L_{\rho_1}(0;v)=\mathcal L_\rho(p;Lv)>0$ by step 1.1. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Multiplication by a positive function: for $t>0$ put $g_t(\zeta):=1+t\operatorname{Re}\zeta_n$ and $\rho_t:=g_t\rho_1$, a $C^2$ defining function of the same domain near $0$ with $g_t(0)=1$ and $d\rho_t(0)=d\rho_1(0)\ne0$. Writing $\ell_1(\zeta)=\zeta_n/2$ and $L_t:=t\ell_1$ and using the identity $2\operatorname{Re}(X)2\operatorname{Re}(Y)=2\operatorname{Re}(X\overline Y)+2\operatorname{Re}(XY)$, multiplication of the expansion of step 3.1 by $g_t=1+2\operatorname{Re}L_t$ gives $\rho_t(\zeta)=2\operatorname{Re}\bigl[\ell_1(\zeta)+\tfrac12A_1(\zeta)+L_t(\zeta)\ell_1(\zeta)\bigr]+\bigl[Q_1(\zeta)+2\operatorname{Re}\bigl(L_t(\zeta)\overline{\ell_1(\zeta)}\bigr)\bigr]+o(|\zeta|^2)$, the $O(|\zeta|^3)$ terms of $2\operatorname{Re}(L_t)(\operatorname{Re}A_1+Q_1)$ having been absorbed into $o(|\zeta|^2)$; thus the holomorphic quadratic part of $\rho_t$ is $B_t:=\zeta_n/2+A_1/2+t\zeta_n^2/4$ and its Hermitian quadratic part is the Hermitian form $H_t(v):=Q_1(v)+(t/2)|v_n|^2$ in the variable $v$. [F1, step 3.1, algebra]

5.1 $H_t$ is positive definite for all large $t$: the hypothesis of step 1.1 says $Q_1(v)>0$ for $0\ne v$ with $v_n=0$, so on the hyperplane $E:=\{v_n=0\}$ there is $\delta>0$ with $Q_1(v)\ge\delta|v|^2$, while the Hermitian form $Q_1$ satisfies $|Q_1(v,w)|\le C|v||w|$ for $v,w\in E$ with a constant $C$ independent of $t$. Decomposing $v=v'+\lambda e_n$ with $v'\in E$ and $\lambda=v_n$ gives $H_t(v)=Q_1(v')+2\operatorname{Re}Q_1(v',\lambda e_n)+|\lambda|^2Q_1(e_n)+(t/2)|\lambda|^2\ge\delta|v'|^2-2C|v'||\lambda|+\bigl(Q_1(e_n)+t/2\bigr)|\lambda|^2$, and $2C|v'||\lambda|\le(\delta/2)|v'|^2+(2C^2/\delta)|\lambda|^2$ because $\bigl(\sqrt{\delta/2}|v'|-\sqrt{2/\delta}C|\lambda|\bigr)^2\ge0$. Choosing $t>0$ with $Q_1(e_n)+t/2\ge 1+2C^2/\delta$ therefore gives $H_t(v)\ge(\delta/2)|v'|^2+|\lambda|^2\ge c|v|^2$ for all $v$, where $c:=\min(\delta/2,1)>0$ and $|v|^2=|v'|^2+|\lambda|^2$; fix such a $t$ and write $\rho_t$ and $H$ for $\rho_t$ and $H_t$. [step 1.1, step 4.1, algebra]

6.1 Killing the holomorphic quadratic part: let $q(\zeta):=-A_1(\zeta)-(t/2)\zeta_n^2$ and define the holomorphic polynomial map $\Phi_2(w):=w+q(w)e_n$, which fixes the first $n-1$ coordinates and sends $w_n$ to $w_n+q(w)$; since $D\Phi_2(0)=I$ it is a local biholomorphism fixing $0$, and with $\widehat\rho:=\rho_t\circ\Phi_2$ one computes for $z=\Phi_2(w)$ that $\ell_1(w+q(w)e_n)=w_n/2+q(w)/2$ and $A_1(w+q(w)e_n)=A_1(w)+O(|w|^3)$, hence $2\operatorname{Re}B_t(\Phi_2(w))=\operatorname{Re}w_n+\operatorname{Re}\bigl[q(w)+A_1(w)+(t/2)w_n^2\bigr]+O(|w|^3)=\operatorname{Re}w_n+O(|w|^3)$, while $H(\Phi_2(w))=H(w)+O(|w|^3)$ because $H$ is quadratic; therefore $\widehat\rho(w)=\operatorname{Re}w_n+H(w)+o(|w|^2)$, and $\widehat\rho$ is a $C^2$ defining function near $0$ of the image of $D$ under the change of coordinates. [step 4.1, step 5.1, algebra]

7.1 Conclusion: since $\widehat\rho(w)-\operatorname{Re}w_n-H(w)=o(|w|^2)$, after shrinking the ball to a radius $\delta>0$ on which $\Phi_2$ is biholomorphic and $|\widehat\rho(w)-\operatorname{Re}w_n-H(w)|\le(c/2)|w|^2$, every $w$ with $|w|<\delta$, $w\ne0$ and $\widehat\rho(w)<0$ satisfies $\operatorname{Re}w_n=\widehat\rho(w)-H(w)-\bigl(\widehat\rho(w)-\operatorname{Re}w_n-H(w)\bigr)\le 0-c|w|^2+(c/2)|w|^2=-(c/2)|w|^2<0$; define $V:=\Phi(\Phi_2(B(0,\delta)))\subseteq U$ and $h(z):=w_n(z)$ where $w=\Phi_2^{-1}(\Phi^{-1}(z))$ is the inverse chart, so that $h$ is holomorphic on $V$, $h(p)=0$, and $\operatorname{Re}h<0$ on $(D\cap V)\setminus\{p\}$ because those points correspond exactly to the parameters $|w|<\delta$, $w\ne0$, $\widehat\rho(w)<0$, and the displayed inequality is the quantitative bound $\operatorname{Re}w_n\le-(c/2)|w|^2$ in the chart $w$ with the constant $c/2>0$ of step 5.1. [step 5.1, step 6.1, algebra] ∎
