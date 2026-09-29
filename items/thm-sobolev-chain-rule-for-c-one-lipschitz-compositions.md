---
id: thm-sobolev-chain-rule-for-c-one-lipschitz-compositions
kind: theorem
title: Chain rule for a $C^1$ function with bounded derivative
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-l-infinity-on-a-measure-space, def-calligraphic-l-p-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions, thm-acl-characterisation-of-w-one-p, def-absolute-continuity-on-almost-every-coordinate-line, def-absolutely-continuous-function, lem-weak-derivative-linearity-locality-and-commutation, thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous, cor-bounded-derivative-implies-lipschitz, thm-chain-rule, thm-lebesgue-measure-of-a-box-of-every-kind, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-generalized-holder-inequality-for-products, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one, cor-continuous-functions-are-borel-measurable, thm-composition-with-borel-functions-preserves-measurability, lem-test-function-cutoffs-and-euclidean-localization, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-finite-sigma-finite-and-semifinite-measures, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapters 1–2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.1 (weak derivatives) and Chapter 2 §2.6 (ACL characterisation, Theorem 2.36, printed pp. 55–59); the composition rule is assembled here from those interfaces
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.5 (weak derivatives and Sobolev spaces)
    - title: Joa Weber, Introduction to Sobolev Spaces (UNICAMP lecture notes)
      url: https://www.math.stonybrook.edu/~joa/PUBLICATIONS/SOBOLEV.pdf
      locator: Chapter 4 §4.1.8, Proposition 4.1.21 (chain rule – composition), printed p. 25
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1 for the weak derivative
  and Chapter 2 §2.6 for the Nikodym ACL characterisation (Theorem 2.36,
  printed pp. 55–59). The proof below composes the one-dimensional chain
  rule with the ACL representative delivered by that characterisation, as
  the source's chain-rule section does, rather than importing the result.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3,
  §§3.1–3.5, for the weak derivative and Sobolev-space conventions of
  PDE-11.
- Joa Weber, *Introduction to Sobolev Spaces* (UNICAMP lecture notes),
  Chapter 4 §4.1.8, Proposition 4.1.21: for $p\in[1,\infty]$ and
  $u\in W^{1,p}_{\mathrm{loc}}(\Omega)$, every $F\in C^1(\mathbb R)$ with
  bounded derivative gives $F\circ u\in W^{1,p}_{\mathrm{loc}}(\Omega)$
  with weak derivatives $(F\circ u)_{e_i}=F'(u)\,u_{e_i}$. The present
  statement adds the global integrability criterion $F(u)\in L^p(\Omega)$
  and its automatic cases; the proof is reconstructed from the library
  interfaces cited below.

## Statement

Assume the Axiom of Choice, used to invoke the published ACL
characterisation and the Countable-Choice interfaces of the locality,
box-measure and Borel-measurability statements cited in the proof. Let
$\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let $1\le p\le\infty$, let
$u\in W^{1,p}(\Omega;\mathbb R)$, and let $F\in C^1(\mathbb R;\mathbb R)$
satisfy $\|F'\|_\infty:=\sup_{t\in\mathbb R}|F'(t)|<\infty$. Then:

1. $F\circ u\in W^{1,p}_{\mathrm{loc}}(\Omega)$, and for every
   $i\in\{1,\ldots,n\}$ the weak derivative satisfies
   $$D_i(F\circ u)=F'(u)\,D_iu\qquad\text{almost everywhere on }\Omega,$$
   where the right-hand side is the almost-everywhere class of the product
   of $F'$ after any measurable representative of $u$ with any measurable
   representative of $D_iu$; this class is well defined and lies in
   $L^p(\Omega)$.
2. $F\circ u\in W^{1,p}(\Omega)$ if and only if $F(u)\in L^p(\Omega)$. The
   condition $F(u)\in L^p(\Omega)$ holds automatically if $F(0)=0$, if
   $p<\infty$ and $\Omega$ has finite Lebesgue measure, or if $p=\infty$.

If $\Omega=\varnothing$ the only class is zero and every assertion holds
vacuously. The exponent $p=1$ and the exponent $p=\infty$ are included, and
no assertion is made about the pointwise derivative of an arbitrary
representative of $u$.

## Facts & Assumptions


**Given:** The Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p\le\infty$; a class $u\in W^{1,p}(\Omega;\mathbb R)$; and a function $F\in C^1(\mathbb R;\mathbb R)$ with $L:=\|F'\|_\infty<\infty$, where $\|F'\|_\infty=\sup_{t\in\mathbb R}|F'(t)|$.

[F1] $W^{1,p}(\Omega;\mathbb K)$ is the set of classes $u\in L^p(\Omega;\mathbb K)$ such that for every first-order multi-index there is an $L^p$ class with a locally integrable representative satisfying the signed test identity for every test function; each such derivative determines one class $D_iu$. For open $U$ with $\overline U$ compact in $\Omega$, the notation $W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ means that the restriction of the class belongs to $W^{1,p}(U;\mathbb K)$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] $L^\infty(\mu)=\{f:X\to\mathbb R: f$ measurable and $\|f\|_\infty<\infty\}$ for a measure space $(X,\mathcal A,\mu)$ ([[def-l-infinity-on-a-measure-space]]).

[F3] For $1\le p<\infty$, $\mathcal L^p(\mu)$ consists of the measurable $f$ with $\int|f|^p\,d\mu<\infty$ ([[def-calligraphic-l-p-on-a-measure-space]]). The passage to almost-everywhere classes is the separate quotient definition in [F4].

[F4] On a measure space, $L^p(\mu)$ for $0<p<\infty$ and for $p=\infty$ is the set of almost-everywhere classes of $\mathcal L^p(\mu)$ respectively $L^\infty(\mu)$, and for $1\le p\le\infty$ the displayed quotient agrees with the usual quotient-vector-space construction ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F5] Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, $1\le p<\infty$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. A class $u$ on $\Omega$ lies in $W^{1,p}(\Omega;\mathbb K)$ if and only if $u\in L^p(\Omega;\mathbb K)$ and $u$ has one measurable ACL representative $u^*$ whose classical coordinate derivatives $\partial_iu^*$ exist almost everywhere, are measurable, and belong to $L^p(\Omega;\mathbb K)$. In that case $\partial_iu^*$ is a representative of $D_iu$ for every $i$ ([[thm-acl-characterisation-of-w-one-p]]).

[F6] Assume Countable Choice for the completed-product convention. A measurable representative $u^*$ of a class on open $\Omega$ is absolutely continuous on almost every coordinate line (ACL) when its sections along almost every line in each coordinate direction are absolutely continuous on compact subintervals, with exceptional parameter sets allowed to depend on the direction and the box; the countable family of open rational boxes $Q$ with $\overline Q\subseteq\Omega$ covers $\Omega$, and the exceptional sets may be united into one null set per direction. For $n=1$ the condition is absolute continuity on every compact subinterval of $\Omega$ ([[def-absolute-continuity-on-almost-every-coordinate-line]]).

[F7] For $a\le b$, a function $f:[a,b]\to\mathbb R$ is absolutely continuous when each short finite family of disjoint subintervals with total length below $\delta$ has total endpoint oscillation below $\varepsilon$ ([[def-absolutely-continuous-function]]).

[F8] Assume Countable Choice. If $v=D^\alpha u$ weakly on $\Omega$ and $V\subseteq\Omega$ is open, then $v|_V=D^\alpha(u|_V)$ weakly on $V$ ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F9] If $f\in AC[a,b]$ and $h$ is Lipschitz on $f([a,b])$, then $h\circ f\in AC[a,b]$ ([[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]]).

[F10] If $I\subseteq\mathbb R$ is an interval, $f:I\to\mathbb R$ continuous on $I$ and differentiable with $|f'|\le M$ at every interior point, then $|f(x)-f(y)|\le M|x-y|$ for all $x,y\in I$ ([[cor-bounded-derivative-implies-lipschitz]]).

[F11] If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f\circ g$ is differentiable at $c$ with $(f\circ g)'(c)=f'(g(c))g'(c)$ ([[thm-chain-rule]]).

[F12] Assume Countable Choice. Every box with $a_i\le b_i$ is Lebesgue measurable with measure the product of the side lengths, so a box with $a_i<b_i$ has finite positive measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F13] Assume Countable Choice. Every bounded Lebesgue measurable subset of $\mathbb R^n$ has finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F14] If $1\le p,q,r\le\infty$ satisfy $1/r=1/p+1/q$ and $f,g$ lie in the corresponding spaces, then $fg$ lies in the space for $r$ and $\|fg\|_r\le\|f\|_p\|g\|_q$ ([[thm-generalized-holder-inequality-for-products]]).

[F15] If $\mu(X)<\infty$, $1\le p<r<\infty$ and $f\in\mathcal L^r(\mu)$, then $f\in\mathcal L^p(\mu)$; and if $1\le p<\infty$ and $f\in L^\infty(\mu)$, then $f\in\mathcal L^p(\mu)$ and $\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F16] If $f$ is measurable with $\|f\|_\infty<\infty$, then $|f|\le\|f\|_\infty$ almost everywhere; and if $|f|\le M$ almost everywhere, then $\|f\|_\infty\le M$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F17] For $1\le p<\infty$ the class $\mathcal L^p(\mu)$ is a real vector space under pointwise addition and scalar multiplication, and so is $L^\infty(\mu)$ ([[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]).

[F18] Assume Countable Choice. Every continuous map $\mathbb R^n\to\mathbb R^m$, $n,m\ge1$, is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]).

[F19] If $f$ is measurable and $g$ is Borel measurable on its codomain, then $g\circ f$ is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F20] In ZF, every open cover of an open $\Omega\subseteq\mathbb R^n$ admits an at most countable locally finite smooth partition of unity with compact supports, each support contained in some member of the cover ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F21] The class $L^1(\mu)$ is a complex vector space and the Lebesgue integral is complex-linear on it ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F22] For nonnegative measurable $f\le g$ one has $\int f\le\int g$, and $\int cf=c\int f$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F23] A measure $\mu$ on a space $X$ is finite if $\mu(X)<+\infty$ ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F24] In ZF the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F25] The Axiom of Choice asserts a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).
## Proof


**Proof technique:** direct.

1.1 By [F24] the Axiom of Choice [F25] yields Countable Choice and Dependent Choice in ZF; only Countable Choice is used below, namely in the ACL definition [F6], the locality lemma [F8], the box-measure formula [F12], the finiteness of Lebesgue measure on bounded sets [F13], the Borel measurability of continuous maps [F18], and the countable selection of box representatives below, while the ACL characterisation [F5] is stated under the Axiom of Choice itself. [F5, F6, F8, F12, F13, F18, F24, F25, given]

2.1 Fix a measurable representative $\hat u$ of the class $u$ and, for each $i\in\{1,\ldots,n\}$, a measurable representative $\hat v_i$ of the class $D_iu$; this is one representative plus finitely many others, so no infinite selection is made. By [F18] and [F19] the function $F'(\hat u)$ is measurable, while [F10] applied on $\mathbb R$ to $F$ shows $|F(s)-F(t)|\le L|s-t|$ for all real $s,t$, in particular $|F(t)|\le|F(0)|+L|t|$ and $|F'(\hat u)|\le L$ everywhere; hence [F16] gives $\|F'(\hat u)\|_\infty\le L$, so [F2] puts $F'(\hat u)$ in $L^\infty(\Omega)$. Define the measurable function $h_i:=F'(\hat u)\hat v_i$. For $1\le p<\infty$ the case $(p,q,r)=(\infty,p,p)$ of [F14] gives $h_i\in\mathcal L^p(\Omega)$ with $\|h_i\|_p\le L\|\hat v_i\|_p<\infty$, and for $p=\infty$ its $(\infty,\infty,\infty)$ case gives $h_i\in L^\infty(\Omega)$; in both cases [F3] and [F4] make $h_i$ an element of the quotient space $L^p(\Omega)$. If $\hat u'$ and $\hat v_i'$ are further measurable representatives of the same two classes, then $\hat u'=\hat u$ and $\hat v_i'=\hat v_i$ almost everywhere, hence $F'(\hat u')=F'(\hat u)$ and $F'(\hat u')\hat v_i'=F'(\hat u)\hat v_i$ almost everywhere, and [F4] shows that the same class is obtained; we write $F'(u)D_iu$ for it. [F2, F3, F4, F10, F14, F16, F18, F19, step 1.1, given]

3.1 Fix one coordinate direction and a rational box $Q=\prod_{j=1}^n(a_j,b_j)$ with $\overline Q\subseteq\Omega$, as in [F6], and write $Q=Q_{\widehat i}\times I_{i,Q}$ for the splitting along the chosen direction. By [F12] $Q$ has finite measure $\lambda_n(Q)=\prod_j(b_j-a_j)$, and the restriction $u|_Q$ of the class $u$ lies in $L^p(Q)$ (in $L^\infty(Q)$ when $p=\infty$). Put $q:=p$ when $p<\infty$ and $q:=1$ when $p=\infty$. Then $u|_Q$ lies in $L^q(Q)$: for finite $p$ this is $q=p$, and for $p=\infty$ the class $u|_Q\in L^\infty(Q)$ is converted into $\mathcal L^1(Q)$ by the second clause of [F15]; and by [F8] each weak derivative restricts, $D_j(u|_Q)=(D_ju)|_Q$ on $Q$, with $(D_ju)|_Q\in L^q(Q)$ by the same two clauses. By [F1] this says $u|_Q\in W^{1,q}(Q;\mathbb R)$, and since $1\le q<\infty$ the ACL characterisation [F5] applies on the open box $Q$: it provides one measurable representative $u_Q^*$ of the class $u|_Q$, ACL in every direction, whose classical coordinate derivatives $\partial_ju_Q^*$ exist almost everywhere on $Q$, are measurable, lie in $\mathcal L^q(Q)$, and represent $D_j(u|_Q)$ almost everywhere for every $j$. Since $u_Q^*$ and $\hat u$ both represent $u|_Q$, and $\partial_j u_Q^*$ and $\hat v_j$ both represent $(D_ju)|_Q$, we have $u_Q^*=\hat u$ and $\partial_ju_Q^*=\hat v_j$ almost everywhere on $Q$ for every $j$, so in particular $F'(u_Q^*)\partial_iu_Q^*=h_i$ almost everywhere on $Q$. The assignment of one representative $u_Q^*$ to each rational box $Q$ is a selection from countably many nonempty sets, licensed by the Countable Choice of step 1.1. [F1, F5, F6, F8, F12, F15, choose, step 1.1, step 2.1, given]

4.1 We verify the membership and representative clauses for the class $F\circ u|_Q$ on $Q$, whose exponent $q$ satisfies $1\le q<\infty$. First $F\circ u|_Q\in L^q(Q)$: by [F10] $|F(s)|\le|F(0)|+L|s|$ for every real $s$, so $|F(u)|\le|F(0)|+L|u|$ pointwise; the bound function lies in $\mathcal L^q(Q)$ because the constant belongs to $\mathcal L^q(Q)$ by the second clause of [F15] applied to the finite-measure box of [F12], the multiple $L|u|$ belongs to $\mathcal L^q(Q)$ by [F17], and sums of $\mathcal L^q$ functions belong to $\mathcal L^q(Q)$ by [F17]; monotonicity [F22] of the nonnegative integral then gives $\int_Q|F(u)|^q<\infty$, so [F3] and [F4] make $F\circ u|_Q$ an element of $L^q(Q)$. Second, $\Phi:=F\circ u_Q^*$ is a measurable representative of that class: it is measurable by [F19] applied to the Borel function $F$ and the measurable $u_Q^*$ of step 3.1, and it agrees with $F\circ u$ almost everywhere on $Q$ because $u_Q^*=u$ almost everywhere there. Third, $\Phi$ is ACL: by [F6] the sections $g_y$ of $u_Q^*$ in each coordinate direction are absolutely continuous in the sense of [F7] on every compact subinterval of the corresponding side interval, for every transverse parameter outside a null set depending on the direction, and [F10] makes $F$ Lipschitz on the whole real line with constant $L$, so [F9] makes each composite section $F\circ g_y$ absolutely continuous on every compact subinterval; the same null exceptional sets therefore serve for $\Phi$. [F3, F4, F6, F7, F9, F10, F12, F15, F17, F19, F22, step 3.1, given]

5.1 Fourth, the classical coordinate derivatives of $\Phi$ exist almost everywhere and agree almost everywhere with the measurable function $G:=F'(u_Q^*)\partial_iu_Q^*$. Indeed, at a point $(y,t)\in Q$ where $\partial_iu_Q^*(y,t)$ exists, the section $g_y$ is differentiable at $t$ with $g_y'(t)=\partial_iu_Q^*(y,t)$ — the partial derivative of a function at a point is by definition the derivative of its coordinate section there — and $F$ is differentiable at $g_y(t)$, so [F11] gives $(F\circ g_y)'(t)=F'(g_y(t))g_y'(t)=G(y,t)$; since $[F5]$ gives that $\partial_iu_Q^*$ exists almost everywhere on $Q$, the derivative $\partial_i\Phi$ exists almost everywhere on the box and equals $G$ there. The function $G$ is measurable and lies in $\mathcal L^q(Q)$: $u_Q^*$ is measurable with $|F'(u_Q^*)|\le L$ everywhere, so [F18] and [F19] make $F'(u_Q^*)$ measurable and [F16] gives $\|F'(u_Q^*)\|_\infty\le L$, whence [F2] puts $F'(u_Q^*)$ in $L^\infty(Q)$; with $\partial_iu_Q^*\in\mathcal L^q(Q)$ from step 3.1, the case $(p,q,r)=(\infty,q,q)$ of [F14] gives $G\in\mathcal L^q(Q)$. All clauses of the characterisation [F5] hold for the class $F\circ u|_Q$ with representative $\Phi$, so $F\circ u|_Q\in W^{1,q}(Q;\mathbb R)$ and the weak derivative $D_i(F\circ u|_Q)$ is represented almost everywhere by $G$. By the comparison of step 3.1, $G=h_i$ almost everywhere on $Q$, so $D_i(F\circ u|_Q)$ is represented almost everywhere by $h_i$. The same argument applies to every coordinate direction simultaneously, because the single representative $u_Q^*$ of step 3.1 is ACL in every direction and its classical coordinate derivatives represent all $D_j(u|_Q)$. [F2, F5, F11, F14, F16, F18, F19, step 3.1, step 4.1, given]

6.1 When $p=\infty$ the exponent used so far is $q=1$, and we upgrade the conclusion of step 5.1 to $W^{1,\infty}(Q)$ for this box. The class $F\circ u|_Q$ lies in $L^\infty(Q)$: $|F(u)|\le|F(0)|+L|u|$ pointwise and $|u|\le\|u|_Q\|_\infty$ almost everywhere on $Q$ by [F16], so $F(u)$ is bounded almost everywhere by $|F(0)|+L\|u|_Q\|_\infty$ and [F16] with [F2] gives $F\circ u|_Q\in L^\infty(Q)$. Each weak derivative class $D_j(F\circ u|_Q)$ lies in $L^\infty(Q)$: by step 5.1 it is represented by $h_j$, and $|h_j|=|F'(\hat u)||\hat v_j|\le L\|\hat v_j\|_\infty$ almost everywhere on $Q$ by [F16], so $h_j|_Q\in L^\infty(Q)$ by [F2]. Thus the class lies in $L^\infty(Q)$ and every first weak derivative class has an $L^\infty$ representative, which is membership in $W^{1,\infty}(Q;\mathbb R)$ by the definition [F1]. [F1, F2, F16, step 3.1, step 5.1, given]

7.1 We patch the box conclusions into a global weak derivative identity. For the fixed direction $i$ and any test function $\varphi\in C_c^\infty(\Omega)$, cover $\Omega$ by the rational boxes of [F6] and use [F20] to choose a locally finite smooth partition of unity $(\chi_k)$ subordinate to that cover, with compact supports. Only finitely many $\chi_k$ meet the compact support of $\varphi$, and $\varphi=\sum_k\chi_k\varphi$; each summand $\chi_k\varphi$ has compact support contained in some box $Q_k$ with $\overline{Q_k}\subseteq\Omega$, so it is a test function on $Q_k$. step 5.1 and step 6.1 give, for every $\psi\in C_c^\infty(Q_k)$, $\int_{Q_k}F(u)\,\partial_i\psi=-\int_{Q_k}h_i\psi$; applying this to the finitely many summands and summing with the linearity of the integral [F21] gives $\int_\Omega F(u)\,\partial_i\varphi=-\int_\Omega h_i\,\varphi$. Both sides are integrable: $u\in L^p(\Omega)$ is locally integrable, $F\circ u\in L^1_{\mathrm{loc}}(\Omega)$ because $|F(u)|\le|F(0)|+L|u|$ with a constant function on finite-measure pieces ([F12] and [F17]), and $h_i\in L^p_{\mathrm{loc}}(\Omega)$ — for finite $p$ because $[h_i]\in L^p(\Omega)$ by step 2.1 and for $p=\infty$ because $|h_i|\le L\|\hat v_i\|_\infty$ almost everywhere by [F16]. Since $\varphi$ was arbitrary and the argument applies to every direction, the definition [F1] gives $D_i(F\circ u)=[h_i]=F'(u)D_iu$ weakly on $\Omega$ for every $i$, hence almost everywhere on $\Omega$. [F1, F6, F12, F16, F17, F20, F21, step 2.1, step 5.1, step 6.1, given]

8.1 We record the local membership. Let $U\subseteq\Omega$ be open with $\overline U$ compact in $\Omega$; then $U$ is bounded, so $\lambda_n(U)<\infty$ by [F13]. The class $F\circ u|_U$ lies in $L^p(U)$: for $p<\infty$ the pointwise bound $|F(u)|\le|F(0)|+L|u|$, the second clause of [F15] applied to the constant and to the $L^\infty$ case, and the vector-space clauses of [F17] show first that the bound function lies in $\mathcal L^p(U)$, and then monotonicity [F22] gives $\int_U|F(u)|^p<\infty$; for $p=\infty$ the bound $|F(u)|\le|F(0)|+L\|u|_U\|_\infty$ holds almost everywhere on $U$ by [F16], so $F\circ u|_U\in L^\infty(U)$ by [F2]. Each weak derivative $D_i(F\circ u|_U)$ is the restriction $(D_i(F\circ u))|_U=[h_i|_U]$ by the locality lemma [F8], and $h_i|_U\in L^p(U)$: for finite $p$ this is the restriction of the class $[h_i]\in L^p(\Omega)$ from step 2.1, and for $p=\infty$ we have $|h_i|\le L\|\hat v_i\|_\infty$ almost everywhere by [F16]. By the definition [F1], $F\circ u|_U\in W^{1,p}(U;\mathbb R)$ for every such $U$, that is, $F\circ u\in W^{1,p}_{\mathrm{loc}}(\Omega)$, and the identity of step 7.1, $D_i(F\circ u)=F'(u)D_iu$ almost everywhere on $\Omega$, holds for every $i$. [F1, F2, F8, F13, F15, F16, F17, F22, step 2.1, step 7.1, given]

8.2 The global membership criterion. If $F\circ u\in W^{1,p}(\Omega)$, then $F\circ u\in L^p(\Omega)$ by the definition [F1], and $F\circ u$ is the class of $F(u)$. Conversely, if $F(u)\in L^p(\Omega)$, then the class $F\circ u\in L^p(\Omega)$, and each derivative class $D_i(F\circ u)=[h_i]$ lies in $L^p(\Omega)$ by step 2.1; the definition [F1] then gives $F\circ u\in W^{1,p}(\Omega)$. This proves the equivalence of clause 2 of the Statement. [F1, step 2.1, step 7.1, given]

9.1 The automatic cases and the closing discussion. If $F(0)=0$, then $|F(u)|\le L|u|$ pointwise by [F10], so $\int_\Omega|F(u)|^p\le L^p\int_\Omega|u|^p<\infty$ by monotonicity [F22] when $p<\infty$ and $\|F(u)\|_\infty\le L\|u\|_\infty$ by [F16] when $p=\infty$; in both cases $F(u)\in L^p(\Omega)$ by [F2], [F3] and [F4], and clause 2 of the Statement follows from step 8.2. If $p<\infty$ and $\lambda_n(\Omega)<\infty$, so that the restricted Lebesgue measure is finite in the sense of [F23], the constant $|F(0)|$ lies in $L^\infty(\Omega)$ and hence in $\mathcal L^p(\Omega)$ by the second clause of [F15], while $L|u|\in\mathcal L^p(\Omega)$ by [F17]; the sum $|F(0)|+L|u|\in\mathcal L^p(\Omega)$ by [F17] dominates $|F(u)|$ pointwise, so $\int_\Omega|F(u)|^p<\infty$ by [F22] and $F(u)\in L^p(\Omega)$. If $p=\infty$, then $|F(u)|\le|F(0)|+L\|u\|_\infty$ almost everywhere on $\Omega$ by [F16], so $F(u)\in L^\infty(\Omega)$ by [F2] and again clause 2 holds by step 8.2. Together with step 8.1 this proves clause 1, and step 8.2 and the present step prove clause 2. The case $n=1$ is included: the ACL definition [F6] then reads that one representative is absolutely continuous on every compact subinterval, and no transverse parameter occurs. If $\Omega=\varnothing$, then the rational-box family of [F6] is empty, the only class is zero, $F\circ u$ is the zero class, and all displayed assertions hold vacuously. The finite-many representative selections of step 2.1 need no choice principle; the only countable selection is that of the box representatives in step 3.1, licensed by the Countable Choice obtained in step 1.1 from the Axiom of Choice. $\square$ [F2, F3, F4, F6, F10, F15, F16, F17, F22, F23, step 1.1, step 3.1, step 8.1, step 8.2, given]
