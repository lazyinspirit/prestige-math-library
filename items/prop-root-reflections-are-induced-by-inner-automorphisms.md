---
id: prop-root-reflections-are-induced-by-inner-automorphisms
kind: proposition
title: Root reflections are induced by inner automorphisms
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-reflection-from-a-coroot, thm-root-sl-two-triple, thm-root-reflections-preserve-the-root-set, prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-coroot-of-a-lie-algebra-root, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-toral-and-maximal-toral-subalgebra, thm-lie-third-fundamental-theorem, prop-adjoint-exponential-identity, thm-the-differential-of-adjoint-is-ad, prop-adjoint-is-a-smooth-lie-group-representation, def-conjugation-and-the-adjoint-representation-of-a-lie-group, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, def-countable-choice, def-axiom-of-choice, thm-additive-jordan-chevalley-decomposition]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4 (Weyl-group automorphisms)"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be a root of the finite-dimensional
complex semisimple Lie algebra $\mathfrak g$ with respect to a Cartan
subalgebra $\mathfrak h$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]),
let $e_\alpha,f_\alpha,h_\alpha$ be the triple of
[[thm-root-sl-two-triple]], and let $G$ be a connected simply connected real
Lie group with Lie algebra $\mathfrak g$. Then

$$\tau_\alpha:=\operatorname{Ad}_{\exp_G(e_\alpha)}\operatorname{Ad}_{\exp_G(-f_\alpha)}\operatorname{Ad}_{\exp_G(e_\alpha)}$$

is an inner automorphism of $\mathfrak g$ with $\tau_\alpha(\mathfrak h)=\mathfrak h$,
$\tau_\alpha(h_\alpha)=-h_\alpha$, $\tau_\alpha(x)=x$ for $x\in\ker\alpha$, and
$\tau_\alpha(\mathfrak g_\beta)=\mathfrak g_{s_\alpha(\beta)}$ for every root
$\beta$; thus $\tau_\alpha$ induces the reflection
$s_\alpha$ of [[def-root-reflection-from-a-coroot]] on the root system.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$, a root $\alpha$, the triple $(e_\alpha,f_\alpha,h_\alpha)$, and a connected simply connected group $G$ with Lie algebra $\mathfrak g$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it implies the countable choice used by [L3] and [L4] through [[def-countable-choice]].

[L1] The triple satisfies $[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$, $[h_\alpha,f_\alpha]=-2f_\alpha$, and $\alpha(h_\alpha)=2$ ([[thm-root-sl-two-triple]], [[def-coroot-of-a-lie-algebra-root]]).

[L2] The root spaces are the eigenspaces of $\operatorname{ad}_{\mathfrak h}$, $[\mathfrak g_\gamma,\mathfrak g_\delta]\subseteq\mathfrak g_{\gamma+\delta}$, and $\mathfrak h=\mathfrak g_0=C_{\mathfrak g}(\mathfrak h)$ is a maximal toral subalgebra, in particular abelian ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[prop-brackets-of-root-spaces]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-toral-and-maximal-toral-subalgebra]]).

[L3] Under countable choice, a connected simply connected real Lie group $G$ with Lie algebra $\mathfrak g$ exists ([[thm-lie-third-fundamental-theorem]], [[def-countable-choice]]).

[L4] Under countable choice, $\operatorname{Ad}:G\to\operatorname{GL}(\mathfrak g)$ is a smooth homomorphism with $\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$, $\operatorname{Ad}_e=I$, values in the automorphisms of $\mathfrak g$, and $\operatorname{Ad}_{\exp_G X}=e^{\operatorname{ad}_X}$, where $e^{tB}$ denotes the unique solution of $E'=B\circ E$, $E(0)=I$; moreover $d(\operatorname{Ad})_eX=\operatorname{ad}_X$ ([[prop-adjoint-exponential-identity]], [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[def-countable-choice]]).

[L5] Linear initial-value problems have unique solutions ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

## Proof

**Proof technique:** direct.

1.1 First, a vanishing criterion: if $X,x\in\mathfrak g$ satisfy $[X,x]=0$, then $\operatorname{Ad}_{\exp_GX}(x)=x$. Indeed the curve $t\mapsto\operatorname{Ad}_{\exp_G(tX)}$ is a homomorphism in $t$ with derivative satisfying $U'(t)=\operatorname{ad}_X\circ U(t)$, by [L4] and the chain rule, and $U(0)=I$; hence $u(t)=U(t)x$ solves $u'=\operatorname{ad}_Xu$ with $u(0)=x$, and so does the constant curve $x$ because $[X,x]=0$. Uniqueness [L5] gives $\operatorname{Ad}_{\exp_GX}(x)=x$. [L4, L5, algebra]

1.2 Similarly, if $\operatorname{ad}_X$ is nilpotent and $(\operatorname{ad}_X)^n=0$, then
$$\operatorname{Ad}_{\exp_GX}=e^{\operatorname{ad}_X}=\sum_{k<n}\frac{(\operatorname{ad}_X)^k}{k!}.$$
Indeed the polynomial curve
$$E(t)=\sum_{k<n}\frac{t^k(\operatorname{ad}_X)^k}{k!}$$
satisfies $E'(t)=\operatorname{ad}_X\circ E(t)$ and $E(0)=I$ by termwise differentiation. Uniqueness [L5] therefore identifies it with $e^{t\operatorname{ad}_X}$, and setting $t=1$ gives the displayed formula. [L4, L5, algebra]

1.3 $\tau_\alpha$ is an inner automorphism: by [L4] each factor $\operatorname{Ad}_{\exp_G(\pm e_\alpha)}$, $\operatorname{Ad}_{\exp_G(-f_\alpha)}$ is an automorphism of $\mathfrak g$, and $\operatorname{Ad}$ is multiplicative, so $\tau_\alpha=\operatorname{Ad}_{g}$ for $g=\exp_G(e_\alpha)\exp_G(-f_\alpha)\exp_G(e_\alpha)\in G$. [L4, algebra]

2.1 If $x\in\ker\alpha\subseteq\mathfrak h$, then $[e_\alpha,x]=\alpha(x)e_\alpha=0$ and $[f_\alpha,x]=-\alpha(x)f_\alpha=0$ by [L2], so step 1.1 applied to $X=e_\alpha, -f_\alpha$ gives $\tau_\alpha(x)=x$. [L1, L2, step 1.1, algebra]

2.2 The operator $\operatorname{ad}_{e_\alpha}$ is nilpotent on $\mathbb Ch_\alpha\oplus\mathbb Ce_\alpha$: indeed $[e_\alpha,h_\alpha]=-2e_\alpha$ and $[e_\alpha,e_\alpha]=0$ by [L1]; likewise $\operatorname{ad}_{-f_\alpha}$ is nilpotent on $\mathbb Ch_\alpha\oplus\mathbb Cf_\alpha$. Using step 1.2 we compute $\operatorname{Ad}_{\exp_G(e_\alpha)}(h_\alpha)=h_\alpha-2e_\alpha$, then $\operatorname{Ad}_{\exp_G(-f_\alpha)}(h_\alpha-2e_\alpha)=-h_\alpha-2e_\alpha$ from $[-f_\alpha,h_\alpha]=-2f_\alpha$ and $[-f_\alpha,e_\alpha]=h_\alpha$, and finally $\operatorname{Ad}_{\exp_G(e_\alpha)}(-h_\alpha-2e_\alpha)=-h_\alpha$; hence $\tau_\alpha(h_\alpha)=-h_\alpha$. [L1, L5, step 1.2, algebra]

3.1 Consequently $\tau_\alpha$ preserves $\mathfrak h=\ker\alpha\oplus\mathbb Ch_\alpha$: it fixes $\ker\alpha$ pointwise by step 2.1 and negates $h_\alpha$ by step 2.2. For a root $\beta$ and $x\in\mathfrak g_\beta$, the element $\tau_\alpha(x)$ satisfies $[H,\tau_\alpha(x)]=\tau_\alpha([\tau_\alpha^{-1}(H),x])=\beta(\tau_\alpha^{-1}(H))\tau_\alpha(x)$ for $H\in\mathfrak h$; since $\tau_\alpha^{-1}|_{\mathfrak h}=\tau_\alpha|_{\mathfrak h}$ is the identity on $\ker\alpha$ and negation on $h_\alpha$, the functional $H\mapsto\beta(\tau_\alpha^{-1}(H))$ agrees with $\beta$ on $\ker\alpha$ and takes the value $-\beta(h_\alpha)$ at $h_\alpha$, hence equals $\beta-\beta(h_\alpha)\alpha=s_\alpha(\beta)$ because $\alpha(h_\alpha)=2$ and $\alpha$ vanishes on $\ker\alpha$. Therefore $\tau_\alpha(\mathfrak g_\beta)\subseteq\mathfrak g_{s_\alpha(\beta)}$, and since $\tau_\alpha$ is an automorphism and $s_\alpha$ is an involution, dimensions agree and equality holds; the Axiom of Choice was used only through [L3] and [L4], that is, through [A1]. [A1, L1, L2, step 2.1, step 2.2, algebra] ∎
