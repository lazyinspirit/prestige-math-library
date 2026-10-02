---
id: lem-boundary-peak-function-by-dbar-correction
kind: lemma
title: "Peak functions at strongly pseudoconvex boundary points, by a dbar correction"
status: draft
origin: pipeline
deps: ["def-axiom-of-choice", "def-countable-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-levi-form-and-strict-plurisubharmonicity", "cor-second-order-taylor-expansion-with-the-hessian", "def-wirtinger-operators-in-several-complex-variables", "lem-positive-smooth-collar-for-a-strictly-psh-negative-set", "lem-global-smooth-strictly-psh-defining-function", "lem-smooth-regularization-of-psh-exhaustion", "lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity", "thm-hormander-l2-dbar-existence", "lem-smooth-bump-between-concentric-euclidean-balls", "thm-d-dbar-decomposition-and-identities", "thm-cauchy-riemann-characterization-in-several-complex-variables", "prop-algebra-of-holomorphic-functions-in-several-variables", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-levi-pseudoconvex-domain"]
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
      locator: "§3.3.2, printed pp. 76-77: the local holomorphic separator from formula (3.1), the cutoff, the smooth correction $v$ with $\\partial v=(\\partial\\chi)/f_p$, the reciprocal correction $g=1/[c+v-(\\chi/f_p)]$ and the peak function $e^{-g}$."
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§3.6.4, Theorem 64(1), PDF pp. 74-75: a bounded strongly Levi pseudoconvex open set admits the strictly plurisubharmonic defining function $\\rho=\\exp(Cr)-1$ on a neighbourhood of its boundary."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I (6.13)(a), printed p. 50, and Ch. VIII (5.1), printed p. 375 (weak pseudoconvexity means a smooth plurisubharmonic exhaustion exists); Ch. VIII §6, Theorem 6.5 with its proof, printed pp. 377-379 (the $C^\\infty$ solvability branch on a weakly pseudoconvex Kaehler manifold)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$, let $D\subseteq\mathbb C^n$ be
a bounded open set and let $p\in\partial D$. Suppose that there are a
neighbourhood $U$ of $\overline D$ and a function
$\rho\in C^\infty(U,\mathbb R)$ such that
$$\rho(p)=0,\qquad D=\{z\in U:\rho(z)<0\},$$
and such that $\rho$ is strictly plurisubharmonic on some neighbourhood of
$\partial D$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

1. Then there is a function $h$, holomorphic on a neighbourhood of
$\overline D$, with
$$h(p)=1\qquad\text{and}\qquad|h(z)|<1\quad\text{for every }z\in D\setminus\{p\}.$$

2. (Strongly pseudoconvex boundaries.) The same conclusion holds when $D$ is a
bounded domain whose boundary is of class $C^\infty$ and strongly
pseudoconvex at every point, that is: for every $q\in\partial D$ there are a
neighbourhood $V$ of $q$ and $\rho\in C^\infty(V,\mathbb R)$ with
$D\cap V=\{\rho<0\}$, $d\rho(q)\ne0$ and $\mathcal L_\rho(q;v)>0$ for every
nonzero complex tangent vector $v$ at $q$
([[def-levi-pseudoconvex-domain]]); namely, there is then $h$ holomorphic on
a neighbourhood of $\overline D$ with $h(p)=1$ and $|h|<1$ on
$D\setminus\{p\}$.


## Facts & Assumptions

**Given:** AC; $n\ge1$; a bounded open $D\subset\mathbb C^n$; $p\in\partial D$; and the smooth negative-set defining data $(U,\rho)$ in branch 1. Branch 2 is reduced to this data in step 7.1. Coordinates are canonical $z_0,\ldots,z_{n-1}$.

[F1] Real second-order Taylor expansion, rewritten using Wirtinger derivatives, separates the real part of a holomorphic linear/quadratic polynomial from the Hermitian Levi quadratic form. Strict psh means the latter is positive definite ([[cor-second-order-taylor-expansion-with-the-hessian]], [[def-wirtinger-operators-in-several-complex-variables]], [[def-levi-form-and-strict-plurisubharmonicity]]).

[F2] The negative set of smooth data strictly psh near its boundary has arbitrarily small outer neighborhoods consisting of finitely many bounded smooth strongly pseudoconvex domains, each with a continuous psh exhaustion; critical boundary points are allowed ([[lem-positive-smooth-collar-for-a-strictly-psh-negative-set]]).

[F3] Smooth strongly pseudoconvex boundary data admit a global smooth defining function strictly psh near the boundary ([[lem-global-smooth-strictly-psh-defining-function]]), for the boundary convention of [[def-levi-pseudoconvex-domain]].

[F4] Under AC and countable choice a continuous psh exhaustion has a smooth strictly psh exhaustive majorant ([[lem-smooth-regularization-of-psh-exhaustion]]). On a bounded domain a smooth psh exhaustion implies Hartogs pseudoconvexity with the equal-radius polydisc convention ([[lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity]]).

[F5] On a Hartogs pseudoconvex domain, with smooth strictly psh weight $\varphi$, every smooth closed $(0,1)$-form of finite weighted energy has a smooth scalar solution $v$ of $\bar\partial v=\alpha$ ([[thm-hormander-l2-dbar-existence]], Statement, smooth-data branch).

[F6] There is a smooth cutoff in $[0,1]$, equal to $1$ on a smaller closed ball and supported in a larger open ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F7] Smooth forms satisfy $\bar\partial^2=0$ ([[thm-d-dbar-decomposition-and-identities]]). A smooth function with all $\bar z$ derivatives zero is holomorphic ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]); polynomial algebra and reciprocals of nonzero holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[F8] The complex exponential satisfies $|e^w|=e^{\operatorname{Re}w}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F9] AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

**Choice use.** AC is inherited by the collar, regularization and Hörmander interfaces; it supplies countable choice for [F4]. Only finitely many outer components and corrections are selected. The polynomial, cutoff, corrected quotient and exponential below are explicit once those data are fixed.

## Proof

1.1 Put $w=z-p$ and define the holomorphic Levi polynomial $$f(z)=2\sum_{j<n}\rho_{z_j}(p)w_j+\sum_{j,k<n}\rho_{z_jz_k}(p)w_jw_k.$$ By [F1], $$\rho(p+w)=\operatorname{Re}f(p+w)+\sum_{j,k<n}\rho_{z_j\bar z_k}(p)w_j\bar w_k+o(|w|^2).$$ The Hermitian form is bounded below by $\lambda|w|^2$ for some $\lambda>0$. Choose $\delta>0$ with $B(p,\delta)\subset U$ and remainder at most $\lambda|w|^2/2$. Since $\rho\le0$ on $\overline D$, $$\operatorname{Re}f(z)\le-\frac\lambda2|z-p|^2\quad(z\in\overline D\cap B(p,\delta)).$$ Thus $f(p)=0$ and $f$ is zero-free on this part of $\overline D\setminus\{p\}$. The argument includes $d\rho(p)=0$: the linear term then vanishes and the same quadratic estimate applies. [F1, F7, given, construct]

2.1 Fix $0<r<R<\delta$. By [F6] take $\chi\in C_c^\infty(B(p,R),[0,1])$ equal to $1$ on a neighborhood of $\overline B(p,r)$. Its derivative support lies in the compact annulus $A=\{r\le|z-p|\le R\}$. The compact set $Z=A\cap\{f=0\}$ is disjoint from $\overline D$ by step 1.1. Apply [F2] with the prescribed open neighborhood $O=U\setminus Z$ to get $G=\bigcup_{i=1}^N G_i\supset\overline D$, with $\overline G\subset O$. Hence $f$ is bounded away from zero on $A\cap\overline G$ when this set is nonempty. On $G$ define $\alpha=(\bar\partial\chi)/f$ in the annulus and zero outside it. More precisely, use the quotient on the open zero-free neighborhood of $\operatorname{supp}(\bar\partial\chi)\cap\overline G$ and zero wherever $\chi$ is locally constant. These definitions agree, so $\alpha$ is smooth, bounded on $G$, and $\bar\partial\alpha=0$ by [F7]. It vanishes near $p$ and satisfies $f\alpha=\bar\partial\chi$ everywhere on $G$. No sublevel of $|f|$ is asserted to lie in a ball. [F2, F6, F7, step 1.1]

3.1 Each $G_i$ has a continuous psh exhaustion by [F2]. Using [F9], apply [F4] to regularize it and then conclude that $G_i$ is Hartogs pseudoconvex in the actual polydisc-radius convention. Take $\varphi(z)=|z|^2$: its Levi eigenvalues are all $1$. The energy $\int_{G_i}|\alpha|^2e^{-|z|^2}$ is finite because $G_i$ is bounded and $\alpha$ is bounded. Thus [F5] gives a smooth scalar $v_i$ on $G_i$ with $\bar\partial v_i=\alpha$. Define $v=v_i$ on each of the finitely many disjoint components. Then $v\in C^\infty(G)$ solves $\bar\partial v=\alpha$, is holomorphic near $p$, and is bounded on the compact set $\overline D\subset G$. The data need not have compact support in each $G_i$: boundedness on the bounded domain proves the required finite energy. [F2, F4, F5, F7, F9, step 2.1]

4.1 Choose $c>1+\max_{\overline D}|v|$ and put $Q=(c+v)f-\chi$ on $G$. Since $f\alpha=\bar\partial\chi$, $$\bar\partial Q=f\bar\partial v-\bar\partial\chi=0,$$ so $Q$ is holomorphic by [F7]. Where $\chi=0$ in a neighborhood, $v$ is holomorphic and the expression $g=1/(c+v)$ is holomorphic wherever $c+v\ne0$. Where $Q\ne0$, the expression $g=f/Q$ is holomorphic. The two expressions agree on their common domain where $\chi$ is locally zero: $Q=(c+v)f$ and $Q\ne0$ there forces $f\ne0$. They therefore glue on the union of these open sets. [F7, step 2.1, step 3.1, construct]

5.1 This union contains $\overline D$. At a point of $\overline D$ outside $\operatorname{supp}\chi$, $\chi$ is locally zero and $\operatorname{Re}(c+v)>0$. At a point $z\in\overline D\cap\operatorname{supp}\chi$ other than $p$, step 1.1 gives $f(z)\ne0$ and $\operatorname{Re}(1/f(z))<0$, whence $$\operatorname{Re}\left(c+v(z)-\frac{\chi(z)}{f(z)}\right)\ge c-|v(z)|>0.$$ Thus $Q(z)\ne0$. At $p$ one has $Q(p)=-1$, so $f/Q$ is holomorphic on a full neighborhood of $p$ and $g(p)=0$. Every point of $D$ has $\operatorname{Re}g>0$: where $\chi=0$ this follows from $g=1/(c+v)$, and where $\chi\ne0$ from the same displayed inequality and $g=1/(c+v-\chi/f)$. Therefore $g$ is holomorphic on an open neighborhood of $\overline D$, vanishes at $p$, and has positive real part on $D$. [F7, step 1.1, step 3.1, step 4.1, algebra]

6.1 Set $h=e^{-g}$ on this neighborhood. It is holomorphic, $h(p)=1$, and $|h(z)|=e^{-\operatorname{Re}g(z)}<1$ for every $z\in D$. This proves branch 1 under exactly its stated smooth negative-set hypotheses, including critical boundary points and disconnected $D$. [F7, F8, step 5.1]

7.1 Under the smooth strongly pseudoconvex boundary hypotheses of branch 2, [F3] constructs a $C^\infty$ defining function on a neighborhood of $\overline D$, strictly psh near $\partial D$. Its proof glues the given smooth local defining functions with a finite partition near the compact boundary, extends with a sign-constant interior/exterior term, and applies $e^{Cr}-1$ after a tangent/normal Levi estimate. Thus it supplies the smooth data required by branch 1 without upgrading a merely $C^2$ function. Step 6.1 now gives the same $h$ for branch 2. [F3, step 6.1, given]

8.1 Both branches of the Statement hold with all their original hypotheses, under the ambient AC. [F9, step 6.1, step 7.1] ∎
