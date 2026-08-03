---
id: thm-uniqueness-complete-ordered-field
kind: theorem
title: "Uniqueness of the complete ordered field: $\\mathbb{R}$ up to a unique isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, def-ordered-field, thm-of-archimedean, lem-of-q-embeds, lem-of-q-dense, lem-of-hom-fixes-q, lem-of-hom-order-preserving, thm-of-square-roots, def-ordered-field-isomorphism, def-field-homomorphism, lem-of-add-order, lem-of-sign-rules]
aliases: []
landmark: true
short: "ℝ unique up to unique iso"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 30 (Uniqueness of the real numbers)"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "H. Jerome Keisler, Foundations of Infinitesimal Calculus"
      url: "https://people.math.wisc.edu/~hkeisler/foundations.pdf"
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-25
pipeline_run: null
---

## Statement

Any two complete ordered fields $F$ and $G$ ([[def-complete-ordered-field]]) are
isomorphic via a **unique** ordered-field isomorphism
([[def-ordered-field-isomorphism]]) $\varphi : F \to G$, and this $\varphi$
**fixes $\mathbb{Q}$** ($\varphi \circ \iota_F = \iota_G$). Consequently
$\mathbb{R}$ is the **unique complete ordered field up to a unique isomorphism**,
and it admits $\mathbb{Q}$ as an ordered subfield via $\iota_F$.

## Facts & Assumptions

**Given:** Complete ordered fields $F, G$ with canonical embeddings $\iota_F : \mathbb{Q} \to F$, $\iota_G : \mathbb{Q} \to G$; for $x \in F$ set $L_x := \{\iota_G(q) : q \in \mathbb{Q},\ \iota_F(q) < x\} \subseteq G$ and define $\varphi : F \to G$ by $\varphi(x) := \sup L_x$, and symmetrically $\psi : G \to F$ by $\psi(y) := \sup\{\iota_F(q) : q \in \mathbb{Q},\ \iota_G(q) < y\}$.

[L1] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L2] The canonical embedding $\iota : \mathbb{Q} \to F$ is a field homomorphism that is injective and order-preserving in both directions ($q < r \iff \iota(q) < \iota(r)$); likewise $\iota_G$ ([[lem-of-q-embeds]]).

[L3] Density: in an Archimedean ordered field, for $u < v$ there is $q \in \mathbb{Q}$ with $u < \iota(q) < v$ ([[lem-of-q-dense]]).

[L4] Any field homomorphism between ordered fields fixes $\mathbb{Q}$ ([[lem-of-hom-fixes-q]]).

[L5] A field homomorphism from a complete ordered field into an ordered field is injective and order-preserving, hence (the domain being totally ordered) order-preserving in both directions ([[lem-of-hom-order-preserving]]).

[L6] Completeness: every nonempty subset of $F$ (resp. $G$) bounded above has a least upper bound ([[def-complete-ordered-field]]).

[L7] An ordered-field isomorphism is a bijective field homomorphism order-preserving in both directions; a field homomorphism preserves $+$, $\cdot$, and $1$ ([[def-ordered-field-isomorphism]], [[def-field-homomorphism]]).

[L8] Least-upper-bound calculus in $G$: for nonempty $T \subseteq G$ bounded above with $u = \sup T$, any upper bound $w$ of $T$ satisfies $w \ge u$; and translation $z \mapsto z + c$ and, for $c > 0$, scaling $z \mapsto cz$ preserve $\le$ as well as $<$. [[lem-of-add-order]] (claim 1) and [[lem-of-sign-rules]] (claim 4) state the STRICT forms and only those, $z < z' \Rightarrow z + c < z' + c$ and, for $c > 0$, $z < z' \iff cz < cz'$; the nonstrict forms used here are those together with the equality cases, in which $z + c = z' + c$ and $cz = cz'$, the order being total by trichotomy ([[def-ordered-field]]). Hence from $\,\alpha \ge \iota_G(q) + c$ for all $q$ with $\iota_F(q) < x$ one gets $\alpha \ge \varphi(x) + c$, and from $\,\alpha \ge \iota_G(q)\,c$ (with $c > 0$) for all such $q$ with $q > 0$ one gets $\alpha \ge \varphi(x)\,c$ (using that the positive rationals below $x$ are cofinal when $x > 0$).

## Proof

**Proof technique:** direct.

1.1 For each $x \in F$, applying [L3] (with $F$ Archimedean by [L1]) to $x - 1 < x$ and to $x < x + 1$ gives rationals $a, b$ with $\iota_F(a) < x < \iota_F(b)$; then $\iota_G(a) \in L_x$, and every $\iota_G(q) \in L_x$ has $\iota_F(q) < \iota_F(b)$ so $q < b$ hence $\iota_G(q) < \iota_G(b)$, so $L_x$ is nonempty and bounded above and $\varphi(x) = \sup L_x$ exists in $G$ by [L6]. [L1, L2, L3, L6]

1.2 If $x > 0$, then applying [L3] to $0 < x$ gives a rational $q$ with $0 < \iota_F(q) < x$, whence $q > 0$, $\iota_G(q) > 0$, and $\iota_G(q) \in L_x$, so $\varphi(x) = \sup L_x \ge \iota_G(q) > 0$. [L2, L3]

1.3 For $r \in \mathbb{Q}$, $L_{\iota_F(r)} = \{\iota_G(q) : q < r\}$ by [L2]; $\iota_G(r)$ is an upper bound, and any $w < \iota_G(r)$ is exceeded by some $\iota_G(q') \in L_{\iota_F(r)}$ via density [L3] in $G$, so $\sup = \iota_G(r)$, i.e. $\varphi(\iota_F(r)) = \iota_G(r)$. [L2, L3]

2.1 For rationals $q, q'$ with $\iota_F(q) < x$ and $\iota_F(q') < x'$, additivity of $\iota_F$ gives $\iota_F(q + q') < x + x'$, so $\iota_G(q) + \iota_G(q') = \iota_G(q + q') \in L_{x + x'}$ and $\varphi(x + x') \ge \iota_G(q) + \iota_G(q')$; fixing $q'$ and taking the sup over $q$, then over $q'$, yields $\varphi(x + x') \ge \varphi(x) + \varphi(x')$ by the least-upper-bound calculus [L8]. [step 1.1, L2, L3, L8]

2.2 For any rational $s$ with $\iota_F(s) < x + x'$ we have $\iota_F(s) - x' < x$; density [L3] gives a rational $q$ with $\iota_F(s) - x' < \iota_F(q) < x$, so $\iota_F(q) < x$, and the left inequality gives $\iota_F(s) - \iota_F(q) < x'$, i.e. $\iota_F(s - q) = \iota_F(s) - \iota_F(q) < x'$ by additivity of $\iota_F$; whence $\iota_G(s) = \iota_G(q) + \iota_G(s - q) \le \varphi(x) + \varphi(x')$; as $s$ was arbitrary and $\varphi(x + x') = \sup L_{x + x'}$, the least upper bound is $\le \varphi(x) + \varphi(x')$ [L8], i.e. $\varphi(x + x') \le \varphi(x) + \varphi(x')$. [step 1.1, L2, L3, L8]

2.3 For $x, x' > 0$ and positive rationals $q, q'$ with $\iota_F(q) < x$, $\iota_F(q') < x'$, multiplying positives gives $\iota_F(qq') < xx'$, so $\iota_G(q)\iota_G(q') = \iota_G(qq') \in L_{xx'}$ and $\varphi(xx') \ge \iota_G(q)\iota_G(q')$; since positive rationals below $x$ are cofinal (as $x > 0$) their images have supremum $\varphi(x) > 0$, so scaling by $\iota_G(q') > 0$ and taking sups over $q$ then $q'$ gives $\varphi(xx') \ge \varphi(x)\varphi(x')$ by the least-upper-bound calculus [L8]. [step 1.1, step 1.2, L2, L3, L8, algebra]

2.4 For $x, x' > 0$ and any positive rational $s$ with $\iota_F(s) < xx'$ we have $\iota_F(s)(x')^{-1} < x$; density [L3] gives a rational $q$ with $\iota_F(s)(x')^{-1} < \iota_F(q) < x$, where $\iota_F(s)(x')^{-1} > 0$ (as $s > 0$, $x' > 0$), so $\iota_F(q) > 0$ and $q > 0$; the left inequality gives $\iota_F(s) < \iota_F(q)\,x'$, hence $\iota_F(s/q) = \iota_F(s)\iota_F(q)^{-1} < x'$ (dividing by $\iota_F(q) > 0$), while $\iota_F(q) < x$; therefore $\iota_G(s) = \iota_G(q)\iota_G(s/q) \le \varphi(x)\varphi(x')$, and as the positive rationals $s$ with $\iota_F(s) < xx'$ are cofinal, $\varphi(xx') = \sup L_{xx'} \le \varphi(x)\varphi(x')$ by [L8]. [step 1.1, step 1.2, L2, L3, L8, algebra]

3.1 Combining the two inequalities, $\varphi(x + x') = \varphi(x) + \varphi(x')$ for all $x, x' \in F$; in particular $\varphi(0_F) = 0_G$ and $\varphi(-x) = -\varphi(x)$. [step 2.1, step 2.2]

3.2 Combining the two inequalities, $\varphi(xx') = \varphi(x)\varphi(x')$ whenever $x, x' > 0$. [step 2.3, step 2.4]

4.1 For arbitrary signs, $\varphi(0_F \cdot x') = 0_G = 0_G \cdot \varphi(x')$, and for $x < 0 < x'$ we get $\varphi(xx') = \varphi(-((-x)x')) = -\varphi((-x)x') = -\varphi(-x)\varphi(x') = \varphi(x)\varphi(x')$ using step 3.1 and step 3.2; the remaining sign cases are identical, so $\varphi(xx') = \varphi(x)\varphi(x')$ for all $x, x' \in F$. [step 3.1, step 3.2]

5.1 By step 3.1, step 4.1, and $\varphi(1_F) = \iota_G(1) = 1_G$ from step 1.3, $\varphi$ preserves $+$, $\cdot$, and $1$, so $\varphi$ is a field homomorphism $F \to G$. [step 1.3, step 3.1, step 4.1]

6.1 Hence by [L5] (as $F$ is complete) $\varphi$ is injective and order-preserving in both directions, and by [L4] it fixes $\mathbb{Q}$: $\varphi \circ \iota_F = \iota_G$. [step 5.1, L4, L5]

7.1 The construction and steps 1.1-6.1 used only that $F$ and $G$ are complete ordered fields with canonical embeddings $\iota_F, \iota_G$; applying that entire argument verbatim with the roles of $F$ and $G$ interchanged shows the symmetric map $\psi : G \to F$ is likewise an injective, order-preserving field homomorphism that fixes $\mathbb{Q}$. [step 6.1]

8.1 For $x \in F$, since $\varphi$ fixes $\mathbb{Q}$ and is order-preserving in both directions, $\iota_G(q) < \varphi(x) \iff \iota_F(q) < x$, so $\psi(\varphi(x)) = \sup\{\iota_F(q) : \iota_F(q) < x\} = x$ by density [L3]; symmetrically $\varphi(\psi(y)) = y$, so $\varphi$ is a bijection with inverse $\psi$. [step 6.1, step 7.1, L3]

9.1 Thus $\varphi$ is a bijective field homomorphism order-preserving in both directions, i.e. an ordered-field isomorphism $F \cong G$ fixing $\mathbb{Q}$. [step 6.1, step 8.1, L7]

10.1 For uniqueness let $\chi : F \to G$ be any ordered-field isomorphism; being such it is in particular a field homomorphism ([L7]), so by [L4] it fixes $\mathbb{Q}$, and it is order-preserving, so for each $x$ every $\iota_G(q) \in L_x$ equals $\chi(\iota_F(q)) < \chi(x)$, making $\chi(x)$ an upper bound of $L_x$, hence $\chi(x) \ge \varphi(x)$. [step 9.1, L4, L7]

11.1 Conversely, were $\chi(x) > \varphi(x)$, density [L3] would give a rational $q$ with $\varphi(x) < \iota_G(q) < \chi(x)$; then $\iota_G(q) > \sup L_x$ forces $\iota_F(q) \ge x$, since $\iota_F(q) < x$ would put $\iota_G(q)$ into $L_x$ and hence below $\sup L_x$; so $\chi(x) \le \chi(\iota_F(q)) = \iota_G(q) < \chi(x)$, which is impossible, hence $\chi(x) \le \varphi(x)$. [step 10.1, L3, L4]

12.1 Therefore $\chi(x) = \varphi(x)$ for every $x$, so $\chi = \varphi$: the ordered-field isomorphism is unique. [step 10.1, step 11.1]

13.1 Applying this to any two constructions of $\mathbb{R}$, which are complete ordered fields, $\mathbb{R}$ is the unique complete ordered field up to a unique ordered-field isomorphism, and $\iota_F : \mathbb{Q} \to \mathbb{R}$ exhibits $\mathbb{Q}$ as an ordered subfield. [step 9.1, step 12.1, L2] ∎
