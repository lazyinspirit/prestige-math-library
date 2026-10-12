---
id: lem-gr-galerkin-second-time-derivative-bound
kind: lemma
title: "Uniform H^{s-2} Lipschitz bound for the time derivative of a Galerkin solution"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-periodic-sobolev-algebra, lem-gr-galerkin-ode-local-solution, lem-gr-galerkin-time-derivative-bound, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-bochner-integral-norm-inequality, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the higher-order energy and Moser-type estimates for the finite-dimensional approximation, and the compactness step that consumes uniform time-continuity of the approximate time derivatives"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 7 (Hyperbolic Equations): energy estimates and passage to the limit for approximations of symmetric hyperbolic systems"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq O$ be compact and convex, and let $R\ge0$. Let $u_N:J\to X_N$ be a
Galerkin solution of [[lem-gr-galerkin-ode-local-solution]] on an open interval
$J\ni0$ for some $N\ge0$, and suppose that $u_N(t)$ takes values in $K$ and
satisfies $\|u_N(t)\|_{H^s}\le R$ for every $t\in J$.

Then there is a constant $C_1=C_1(A^\mu,B,K,s)$ such that
$$\bigl\|\partial_tu_N(t)-\partial_tu_N(t')\bigr\|_{H^{s-2}}\le C_1\,(1+R)^2\,|t-t'|\qquad(t,t'\in J).$$

## Facts & Assumptions

**Given:** Countable Choice, $s\ge5$, the coefficient family on $O$, the
compact convex $K$, the bound $R$, and a Galerkin solution $u_N$ on $J$ with
values in $K$ and $\|u_N\|_{H^s}\le R$.

[L1] The Galerkin equation and its regularity: for every $t\in J$,
$$P_N\bigl[A^0(t,\cdot,u_N(t))\,\partial_tu_N(t)+\sum_{i=1}^3A^i(t,\cdot,u_N(t))\,\partial_iu_N(t)+B(t,\cdot,u_N(t))\bigr]=0\quad\text{in }L^2,$$
with $u_N\in C^1(J;X_N)$, $\partial_tu_N(t)\in X_N$, and $u_N(t)$ a smooth
periodic field ([[lem-gr-galerkin-ode-local-solution]],
[[def-gr-galerkin-fourier-projection]],
[[def-gr-periodic-symmetric-hyperbolic-system]]).

[L2] $P_N$ is linear, self-adjoint on $L^2$, commutes with every spatial
derivative $D^\alpha$, and is the identity on $X_N$; in particular
$D^\alpha v\in X_N$ for $v\in X_N$ and $P_ND^\alpha w=D^\alpha P_Nw$
([[lem-gr-galerkin-projection-properties]],
[[def-gr-galerkin-fourier-projection]]).

[L3] Coercivity on the value set: there is $a>0$ with
$z^{\mathsf T}A^0(t,x,u)z\ge a|z|^2$ for all
$(t,x,u)\in J\times\mathbb T^3_{2\pi}\times K$
([[lem-gr-positive-definite-symmetric-matrix-bounds]] clause (c)).

[L4] Time-derivative bound: there is $C=C(A^\mu,B,K,R,s)$ with
$\|\partial_tu_N(t)\|_{H^j}\le C(1+\|u_N(t)\|_{H^s})\le C(1+R)$ for every
$0\le j\le s-1$ and every $t\in J$
([[lem-gr-galerkin-time-derivative-bound]]).

[L5] Fundamental theorem of calculus and its norm bound: for the $C^1$ curve
$u_N:J\to X_N$, identified with a curve in $H^{s-1}$,
$u_N(t)-u_N(t')=\int_{t'}^t\partial_tu_N(s)\,ds$ in $H^{s-1}$, and the norm
of the integral is at most the integral of the norms
([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]],
[[lem-bochner-integral-norm-inequality]]).

[L6] Composition, difference and multiplier estimates at order $k:=s-1\ge4$
([[lem-gr-smooth-composition-and-commutator-estimates]] clauses (a), (b), (c),
(d)): for the smooth coefficient maps $A^\mu,B$ and their partial
$t$-derivatives $\partial_tA^\mu,\partial_tB$, and for fields $u,u_1,u_2$
taking values in the compact convex $K$ with $H^s$ norms at most $R$:

(i) $\|F(t,\cdot,u)\|_{H^r}\le C(1+R)$ for every $0\le r\le s$;

(ii) $\|F(t,\cdot,u_1)-F(t,\cdot,u_2)\|_{H^{k}}\le C\|u_1-u_2\|_{H^{k}}$;

(iii) $\|[D^\alpha,A(t,\cdot,u)]w\|_2\le C(1+\|w\|_{H^{|\alpha|-1}})$ for
$1\le|\alpha|\le k$ and $w\in H^{|\alpha|-1}$;

(iv) $\|A(t,\cdot,u)w\|_{H^j}\le C\|w\|_{H^j}$ for $0\le j\le k$.

Moreover, the $u$-difference of a smooth coefficient is given pointwise in $x$
by the mean-value formula
$F(t,\cdot,u_1)-F(t,\cdot,u_2)=\int_0^1(\partial_uF)(t,\cdot,u_\vartheta)
[u_1-u_2]\,d\vartheta$ with $u_\vartheta:=u_2+\vartheta(u_1-u_2)$ taking
values in $K$ by convexity, and combined with (i) and (iv) this yields the
joint difference bound
$$\|F(t,\cdot,u_1)-F(t',\cdot,u_2)\|_{H^{k}}\le C_1(1+R)\,|t-t'|$$
whenever $u_1=u_N(t)$, $u_2=u_N(t')$: the mean-value formula
$F(t,\cdot,u_2)-F(t',\cdot,u_2)=\int_{t'}^t(\partial_tF)(s,\cdot,u_2)\,ds$
holds pointwise in $x$, its integrand has $H^k$ norm at most $C(1+R)$ by (i),
and the norm of the integral is at most the integral of the norms; the two
estimates add.

[L7] The periodic Sobolev space $H^{k}$ with $k=s-1\ge4$ is a Banach algebra:
$\|gh\|_{H^k}\le C_k\|g\|_{H^k}\|h\|_{H^k}$, and the same bound holds for the
componentwise products occurring in matrix-vector multiplication
([[lem-gr-periodic-sobolev-algebra]] clause (b) and the componentwise
reading of its proof; [[def-gr-periodic-torus-and-sobolev-spaces]]).

## Proof

**Proof technique:** direct.

1.1 (A uniform inverse bound for the projected time matrix.) Fix $t\in J$, write $A^0:=A^0(t,\cdot,u_N(t))$ and $M:=P_NA^0P_N$ as an operator on $X_N$; for $v\in X_N$ self-adjointness of $P_N$ [L2] and coercivity [L3] give $\langle Mv,v\rangle=\langle A^0v,v\rangle\ge a\|v\|_2^2$, so $M$ is positive definite and hence invertible on the finite-dimensional space $X_N$, and $Mv=w$ has for every $w\in X_N$ the unique solution $v=M^{-1}w\in X_N$. We claim $\|M^{-1}w\|_{H^j}\le C_j\|w\|_{H^j}$ for every $w\in X_N$ and $0\le j\le s-2$. Let $v:=M^{-1}w$, so $P_N(A^0v)=w$, and let $|\gamma|\le s-2$; applying $D^\gamma$ to that identity and pairing with $D^\gamma v$ in $L^2$ gives $\langle D^\gamma w,D^\gamma v\rangle=\langle D^\gamma(A^0v),D^\gamma v\rangle=\langle A^0D^\gamma v,D^\gamma v\rangle+\langle[D^\gamma,A^0]v,D^\gamma v\rangle$ by [L2]. The first pairing is at least $a\|D^\gamma v\|_2^2$ by [L3], and Cauchy--Schwarz with the commutator bound [L6] (iii), valid because $|\gamma|\le s-2\le k$, gives $a\|D^\gamma v\|_2\le\|D^\gamma w\|_2+C(1+\|v\|_{H^{|\gamma|-1}})$. For $|\gamma|=0$ the bracket vanishes and $\|v\|_2\le a^{-1}\|w\|_2$; if $\|v\|_{H^{j-1}}\le C_{j-1}\|w\|_{H^{j-1}}$, then for each $|\gamma|=j$ the display gives $\|D^\gamma v\|_2\le a^{-1}[\|D^\gamma w\|_2+C(1+C_{j-1}\|w\|_{H^{j-1}})]\le C_j'\|w\|_{H^j}$, and summing over the finitely many $|\gamma|\le j$ proves the claim by induction on $j$. [L1, L2, L3, L6, induction]

1.2 (Difference of the solution values.) For $t,t'\in J$ put $\Delta:=u_N(t)-u_N(t')\in H^{s-1}$; by [L5] and [L4], $\|\Delta\|_{H^{s-1}}\le\bigl|\int_{t'}^t\|\partial_tu_N(s)\|_{H^{s-1}}ds\bigr|\le C(1+R)|t-t'|$. [L4, L5]

2.1 (Differences of the coefficients and of the projected source.) Put $M(t):=P_NA^0(t,\cdot,u_N(t))P_N$, $Q(t):=P_N[\sum_{i=1}^3A^i(t,\cdot,u_N(t))\partial_iu_N(t)+B(t,\cdot,u_N(t))]\in X_N$ and $g(t):=\partial_tu_N(t)$, so that $M(t)g(t)=-Q(t)$ by [L1]. The joint difference bound [L6] and step 1.2 give $\|A^0(t,\cdot,u_N(t))-A^0(t',\cdot,u_N(t'))\|_{H^{s-1}}\le C(1+R)|t-t'|$; multiplying by $g(t')$, whose $H^{s-1}$ norm is at most $C(1+R)$ by [L4], with the algebra bound [L7] gives $\|(M(t)-M(t'))g(t')\|_{H^{s-2}}\le\|(A^0(t,\cdot,u_N(t))-A^0(t',\cdot,u_N(t')))g(t')\|_{H^{s-1}}\le C_2(1+R)^2|t-t'|$, since $\|\cdot\|_{H^{s-2}}\le\|\cdot\|_{H^{s-1}}$ and $M(t)-M(t')=P_N[A^0(t,\cdot,u_N(t))-A^0(t',\cdot,u_N(t'))]P_N$. For $W(t):=\sum_{i=1}^3A^i(t,\cdot,u_N(t))\partial_iu_N(t)+B(t,\cdot,u_N(t))$ the same computation applies summand by summand: the difference $A^i(t,\cdot,u_N(t))-A^i(t',\cdot,u_N(t'))$ of the $H^{s-1}$ coefficient families times $\partial_iu_N(t)$ contributes $C(1+R)^2|t-t'|$ by [L6] and [L7], the term $A^i(t',\cdot,u_N(t'))\partial_i\Delta$ is the $H^{s-1}$-multiplier $A^i$ [L6] (iv) applied to $\partial_i\Delta$, whose $H^{s-2}$ norm is at most $\|\Delta\|_{H^{s-1}}\le C(1+R)|t-t'|$ by step 1.2, and the $B$-difference is bounded by the joint difference bound [L6] directly; hence $\|W(t)-W(t')\|_{H^{s-2}}\le C_4(1+R)^2|t-t'|$ and therefore $\|Q(t)-Q(t')\|_{H^{s-2}}\le C_5(1+R)^2|t-t'|$. [step 1.2, L4, L6, L7, algebra]

3.1 (The Lipschitz estimate.) Subtracting the identities $M(t)g(t)=-Q(t)$ and $M(t')g(t')=-Q(t')$ and multiplying by $M(t)^{-1}$ on $X_N$ gives the exact identity $g(t)-g(t')=-M(t)^{-1}[(Q(t)-Q(t'))+(M(t)-M(t'))g(t')]$; all fields lie in $X_N$ and $M(t)$ is invertible there by step 1.1. Taking $H^{s-2}$ norms, the inverse bound of step 1.1 with $j=s-2$ and step 2.1 give $\|g(t)-g(t')\|_{H^{s-2}}\le C(1+R)^2|t-t'|$, which is the assertion with $C_1:=C$. [step 1.1, step 2.1, algebra] ∎

## Remarks

- **Role.** This is the equicontinuity input that lets the extraction of
  [[lem-gr-galerkin-limit-is-classical-solution]] be applied to the time
  derivatives $\partial_tu_{N_j}$ in $H^{s-2}$, whose pointwise compactness
  comes from the compact-embedding clause of
  [[lem-gr-galerkin-compactness]]. The step from $H^{s-2}$ back to the
  $L^\infty H^{s-1}$ bound on the limit derivative is the Fatou argument
  carried out there.
- **Why $H^{s-2}$ and not $H^{s-1}$.** Differentiating the equation once loses
  one spatial derivative; the loss is absorbed by the compact embedding
  $H^{s-1}\hookrightarrow H^{s-2}$. Convexity of the value set is used only
  through the mean-value formula for the coefficient difference.
