## Assigned source disposition — `source-mcgill-large-transfer`

Exact URL: https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf

Observed automated-liveness caveat: endpoint returned HTTP 200 and 207480/290259 bytes before the 22-second liveness timeout.

Use web access to determine the exact current disposition. Check whether the URL is usable by a reader and whether the cited claim is materially supported. A transient/transport-only failure may be retained only if you can give concrete evidence; otherwise say replacement is required.

## Complete current citing item text(s)

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `thm-caratheodory-characterisation`

````markdown
---
id: thm-caratheodory-characterisation
kind: theorem
title: "Carathéodory's characterisation: $f$ is differentiable at $c$ if and only if there is $\\varphi : A \\to \\mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in A$, and then $\\varphi$ is unique and $\\varphi(c) = f'(c)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, def-continuity-real, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-limit-is-local]
justified_by: []
aliases: [thm-caratheodory-derivative]
landmark: true
short: "Carathéodory's characterisation"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Carathéodory's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_theorem"
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "S. Kuhn, The Derivative à la Carathéodory, Amer. Math. Monthly 98 (1991)"
      url: "https://en.wikipedia.org/wiki/Constantin_Carath%C3%A9odory"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). The following are equivalent.

1. $f$ is differentiable at $c$ ([[def-derivative]]).
2. There is a function $\varphi : A \to \mathbb{R}$, continuous at $c$
   ([[def-continuity-real]]), with
   $$f(x) - f(c) \;=\; \varphi(x)\,(x - c) \qquad \text{for every } x \in A .$$

When they hold, the function $\varphi$ of claim 2 is **unique** and satisfies
$\varphi(c) = f'(c)$.

**What the reformulation buys.** Claim 2 contains no quotient and no limit: it
is an algebraic identity plus a continuity hypothesis at one point. Every
differentiation rule on this page is proved by exhibiting the factor $\varphi$
for the new function and reading its continuity off the algebra and composition
theorems for continuous functions. In particular the chain rule becomes a
one-line substitution, with none of the case analysis that the
difference-quotient proof needs where the inner increment vanishes.

**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**
It is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is
what makes continuity of $\varphi$ at $c$ equivalent to a statement about the
limit of $\varphi$ there ([[def-continuity-real]], clause 1). At an isolated
point of $A$ claim 2 holds for *every* $f$, with $\varphi$ arbitrary off $c$,
because every function is continuous at an isolated point; claim 1 is not even a
statement there.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ ([[def-limit-point-r]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ exactly when $\lim_{x \to c} q(x)$ exists, its value then being $f'(c)$; moreover, for any $Q : A \to \mathbb{R}$ agreeing with $q$ on $A \setminus \{c\}$ and any real $L$, the conditions $\lim_{x \to c} Q(x) = L$ and $\lim_{x \to c} q(x) = L$ are the same condition, since the clause $0 < |x - c|$ removes $x = c$ from both quantifiers.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L3] Continuity at a limit point ([[def-continuity-real]], clause 1): for $c \in A$ a limit point of $A$, a function $\psi : A \to \mathbb{R}$ is continuous at $c$ if and only if $\lim_{x \to c} \psi(x)$ exists and equals $\psi(c)$.

[L4] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]).

[L5] Locality (claim 1 of [[lem-limit-is-local]]): if two functions on $A$ agree at every $x \in A$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then for every real $L$ one has $\lim_{x \to c} = L$ for the first exactly when it holds for the second.

## Proof

**Proof technique:** direct.

1.1 **Claim 1 implies claim 2: the factor.** Assume $f$ is differentiable at $c$, and define $\varphi : A \to \mathbb{R}$ by $\varphi(x) := (f(x) - f(c))/(x - c)$ for $x \in A$ with $x \ne c$, and $\varphi(c) := f'(c)$. This is a function on the whole of $A$, since every $x \in A$ falls under exactly one of the two clauses and the division is by a nonzero number. [L1, construct]

1.2 **Claim 2 implies claim 1: the hypothesis.** Assume instead that some $\varphi : A \to \mathbb{R}$ is continuous at $c$ and satisfies $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [assume-hyp]

1.3 **Uniqueness.** Let $\varphi$ and $\psi$ both be as in claim 2. For $x \in A$ with $x \ne c$ the identity gives $\varphi(x)(x - c) = f(x) - f(c) = \psi(x)(x - c)$, and dividing by $x - c \ne 0$ gives $\varphi(x) = \psi(x)$; so the two agree on $A \setminus \{c\}$, hence at every $x \in A$ with $0 < |x - c| < 1$. By [L3] each has a limit at $c$, equal to its own value there; by [L5] those two limits are limits of functions agreeing near $c$, so by [L4] they are equal, that is $\varphi(c) = \psi(c)$. Hence $\varphi = \psi$. [L3, L4, L5]

2.1 **The identity holds for the factor built in step 1.1.** For $x \in A$ with $x \ne c$, multiplying the defining equation $\varphi(x) = (f(x) - f(c))/(x - c)$ by $x - c$ gives $\varphi(x)(x - c) = f(x) - f(c)$; and at $x = c$ both sides are $0$, since $f(c) - f(c) = 0$ and $\varphi(c)(c - c) = 0$. So the identity of claim 2 holds for every $x \in A$. [step 1.1]

2.2 **The factor built in step 1.1 is continuous at $c$.** That $\varphi$ agrees with the difference quotient $q$ at every point of $A \setminus \{c\}$ is its definition, so by [L1] the limit $\lim_{x \to c} \varphi(x)$ exists and equals $f'(c)$, which is $\varphi(c)$. Since $c$ is a limit point of $A$, [L3] turns that into continuity of $\varphi$ at $c$. [step 1.1, L1, L3]

2.3 **Under the hypothesis of step 1.2, $\varphi$ extends the difference quotient.** For $x \in A$ with $x \ne c$, dividing the identity by $x - c \ne 0$ gives $q(x) = \varphi(x)(x-c)/(x-c) = \varphi(x)$. So $\varphi$ agrees with $q$ at every point of $A \setminus \{c\}$. [step 1.2]

2.4 **Under the hypothesis of step 1.2, $\varphi$ has a limit at $c$.** Continuity of $\varphi$ at the limit point $c$ gives, by [L3], that $\lim_{x \to c} \varphi(x)$ exists and equals $\varphi(c)$. [step 1.2, L3]

3.1 **Claim 2 implies claim 1.** By step 2.3 the function $\varphi$ agrees with $q$ off $c$, so the last clause of [L1] applies with $Q := \varphi$ and $L := \varphi(c)$: from $\lim_{x \to c} \varphi(x) = \varphi(c)$, given by step 2.4, it follows that $\lim_{x \to c} q(x) = \varphi(c)$. By [L1] again, $f$ is differentiable at $c$ and $f'(c) = \varphi(c)$. [step 2.3, step 2.4, L1, L2]

4.1 Both implications and both supplementary claims are proved: claim 1 gives claim 2 by steps 1.1, 2.1 and 2.2, with $\varphi(c) = f'(c)$ by construction; claim 2 gives claim 1 by step 3.1, with $\varphi(c) = f'(c)$ established there; and the factor is unique by step 1.3. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The identity at $x = c$ is empty, and that is the point.** Both sides vanish there whatever $\varphi(c)$ is, so the identity alone determines $\varphi$ only off $c$; it is the *continuity* hypothesis that pins the remaining value, and it pins it to $f'(c)$. Drop continuity and claim 2 becomes true for every $f$ whatsoever, with $\varphi(c)$ arbitrary.

- **Why this is not circular.** The proof of claim 2 from claim 1 builds $\varphi$ out of the very quotient whose limit is $f'(c)$, so nothing new is asserted in that direction. The content is the other direction: a factorisation with a factor merely continuous at one point already forces the quotient to converge. That is the direction every rule on this page uses.

- **The factor is a genuinely useful object, not a device.** For $f(x) = x^{n}$ it can be written down in closed form, as the polynomial $\varphi(x) = \sum_{k < n} c^{k} x^{\,n-1-k}$ supplied by [[lem-power-difference-factorisation]]; the companion page writes that factor out and differentiates a composite with it.
````

### `cor-differentiable-implies-continuous`

````markdown
---
id: cor-differentiable-implies-continuous
kind: corollary
title: "A function differentiable at $c$ is continuous at $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, def-continuity-real, thm-algebra-of-continuous-functions, def-limit-point-r]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: []
landmark: true
short: "differentiable implies continuous"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$
([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).

Consequently, if $f$ is differentiable on a set $S \subseteq A$ then $f$ is
continuous at every point of $S$.

**No converse is asserted, and none holds.** Continuity at $c$ does not give
differentiability at $c$, and the standard witness is worked out on the
companion page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): since $f$ is differentiable at the limit point $c$ of $A$, there is $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$, and $\varphi(c) = f'(c)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point of the common domain are continuous there (claim 1); and every constant function on $A$ and the identity $x \mapsto x$ on $A$ are continuous at every point of $A$ (claim 5).

[L3] Continuity of $f$ at $c$ is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and continuity on a set is continuity at each of its points.

## Proof

**Proof technique:** direct.

1.1 Fix a function $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [L1, choose]

1.2 The identity $x \mapsto x$ on $A$ and every constant function on $A$ are continuous at $c$; hence so is $x \mapsto x - c$, which is the sum of the identity and the constant function with value $-c$. [L2]

2.1 The pointwise product $x \mapsto \varphi(x)(x - c)$ is continuous at $c$, being the product of two functions on $A$ continuous at $c$. [step 1.1, step 1.2, L2]

3.1 For every $x \in A$ one has $f(x) = f(c) + \varphi(x)(x - c)$, so $f$ is the sum of the constant function with value $f(c)$ and the product of step 2.1. [step 1.1, L1]

4.1 A sum of two functions continuous at $c$ is continuous at $c$, so $f$ is continuous at $c$. [step 2.1, step 3.1, L2, L3]

5.1 The point $c$ was an arbitrary point of $A$, a limit point of $A$, at which $f$ is differentiable; applying step 4.1 at every point of a set $S \subseteq A$ on which $f$ is differentiable gives continuity of $f$ at every point of $S$. [step 3.1, L3] ∎

## Remarks

- **Where the work actually is.** None of it is here. Carathéodory's characterisation already replaces the quotient by a product, and a product is visibly small when one factor is bounded near $c$ and the other tends to $0$; the algebra of continuous functions packages exactly that. A direct proof from the quotient would multiply and divide by $x - c$ and would have to say why that is legal, which is the same observation in a less convenient place.

- **The converse fails.** $x \mapsto |x|$ is continuous at $0$ and not differentiable there, which is [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page. So continuity is strictly weaker, and the gap is not exotic: it opens at a single corner.

- **What is *not* claimed.** Nothing here says that a function differentiable on a set has a continuous derivative, and nothing here says that $f'$ is defined anywhere except where it was assumed to be. Both are separate questions, and neither is settled on this page.
````

### `thm-derivative-linear-approximation-form`

````markdown
---
id: thm-derivative-linear-approximation-form
kind: theorem
title: "The linear-approximation form of the derivative: $f$ is differentiable at $c$ with $f'(c) = L$ if and only if the remainder $r(x) = f(x) - f(c) - L(x-c)$ satisfies $\\lim_{x \\to c} r(x)/(x-c) = 0$; at most one $L$ does so, so $x \\mapsto f(c) + L(x-c)$ is the unique affine map approximating $f$ to first order at $c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-of-abs-value]
justified_by: []
aliases: [thm-frechet-form-of-the-derivative]
landmark: true
short: "derivative as first-order approximation"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "Linear approximation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_approximation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}$. Write

$$\alpha_L : A \to \mathbb{R}, \qquad \alpha_L(x) := f(c) + L\,(x - c),$$

for the affine map through $(c, f(c))$ of slope $L$, and let
$r_L := f - \alpha_L$, that is $r_L(x) = f(x) - f(c) - L(x - c)$.

1. $f$ is differentiable at $c$ with $f'(c) = L$ ([[def-derivative]]) if and
   only if
   $$\lim_{x \to c} \frac{r_L(x)}{x - c} \;=\; 0 ,$$
   the quotient being taken as a function on $A \setminus \{c\}$
   ([[def-function-limit]]).
2. At most one real $L$ satisfies the condition of claim 1. Some real satisfies
   it exactly when $f$ is differentiable at $c$, and then that real is $f'(c)$.

So among all affine maps through $(c, f(c))$ there is at most one whose error
$r_L$ is small compared with $x - c$ near $c$; it exists exactly when $f$ is
differentiable at $c$, and its slope is the derivative. This is the sense in
which the derivative is a **first-order approximation** and not merely a
quotient.

**What the statement does not say.** It says nothing about how small $r_L$ is in
absolute terms, and nothing about any $x$ away from $c$. The assertion is only
that the ratio $r_L(x)/(x-c)$ tends to $0$; a second-order estimate on $r_L$
needs hypotheses this page does not have.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, a real $L$, and the functions $\alpha_L$ and $r_L = f - \alpha_L$ of the statement ([[def-limit-point-r]], [[def-derivative]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ with $f'(c) = L$ exactly when $\lim_{x \to c} q(x) = L$.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L3] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); in particular the value $f'(c)$ is a single real.

[L4] Absolute value: $|u - 0| = |u|$, since $u - 0 = u$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For every $x \in A$ with $x \ne c$ the number $x - c$ is nonzero, so the quotient $r_L(x)/(x-c)$ is defined, and $r_L(x)/(x - c) = \bigl(f(x) - f(c)\bigr)/(x-c) - L(x-c)/(x-c) = q(x) - L$. So $x \mapsto r_L(x)/(x-c)$ and $x \mapsto q(x) - L$ are the same function on $A \setminus \{c\}$. [L1, algebra]

2.1 Hence for every $x \in A$ with $x \ne c$ one has $\bigl|r_L(x)/(x-c) - 0\bigr| = |q(x) - L|$. [step 1.1, L4]

3.1 Fix a real $\varepsilon > 0$ and a real $\delta > 0$. By step 2.1 the assertion "every $x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$ satisfies $|r_L(x)/(x-c) - 0| < \varepsilon$" and the assertion "every $x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$ satisfies $|q(x) - L| < \varepsilon$" are the same assertion. Quantifying over $\varepsilon$ and $\delta$, the two limit conditions of [L2] on the common domain $A \setminus \{c\}$, of which $c$ is a limit point by [L1], coincide. [step 2.1, L1, L2]

3.2 Therefore $\lim_{x \to c} r_L(x)/(x-c) = 0$ holds if and only if $\lim_{x \to c} q(x) = L$ holds, which by [L1] is exactly differentiability of $f$ at $c$ with $f'(c) = L$: claim 1. [step 2.1, L1, L2]

4.1 Suppose reals $L$ and $L'$ both satisfy the condition of claim 1. By step 3.2 the function $f$ is differentiable at $c$ with $f'(c) = L$ and with $f'(c) = L'$; the derivative is a single real by [L1] and [L3], so $L = L'$. Conversely, if $f$ is differentiable at $c$ then $L := f'(c)$ satisfies the condition, again by step 3.2. [step 3.1, step 3.2, L1, L3]

5.1 Claims 1 and 2 are proved, the first by step 3.2 and the second by step 4.1; so the affine map $\alpha_L$ with the stated approximation property is unique when it exists, and its slope is $f'(c)$. [step 3.2, step 4.1] ∎

## Remarks

- **Why this is worth stating separately.** The quotient form is what one computes with; the remainder form is what generalises, since it never divides by the increment and so survives verbatim in settings where the increment is not a number one may divide by. Nothing on this page needs that generality, but the equivalence is what licenses the phrase "best linear approximation" used informally elsewhere, and the phrase is otherwise unearned.

- **The two forms are the same $\varepsilon$-$\delta$ condition, not two conditions that happen to agree.** Step 1.1 is an identity of functions on $A \setminus \{c\}$, and everything after it is bookkeeping. In particular the proof spends no limit theorem at all: no algebra of limits, no sequences and no choice principle.

- **Uniqueness is the whole of claim 2, and it is inherited.** It comes from [[lem-function-limit-unique]], the same lemma that lets $f'(c)$ be written at all ([[def-derivative]]). Without a limit point of the domain there is no uniqueness anywhere in sight, and the phrase "the best approximation" would name nothing.
````

### `cex-absolute-value-is-not-differentiable-at-zero`

````markdown
---
id: cex-absolute-value-is-not-differentiable-at-zero
kind: counterexample
title: "$x \\mapsto |x|$ is continuous everywhere and not differentiable at $0$: the difference quotient equals $1$ on the right and $-1$ on the left, so the two one-sided limits differ"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, cor-differentiable-implies-continuous, def-one-sided-limits, thm-two-sided-limit-iff-both-one-sided, lem-of-abs-value, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, def-interval, lem-function-limit-unique, cor-of-one-positive, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$|x|$ is not differentiable at $0$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Absolute value (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_value"
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$ is
continuous at a point $c \in A$ ([[def-continuity-real]]) and if $c$ is a limit
point of $A$ ([[def-limit-point-r]]), then $f$ is differentiable at $c$
([[def-derivative]]).

This is the converse of [[cor-differentiable-implies-continuous]], and it is
false. The witness is $f(x) = |x|$ on $A = \mathbb{R}$ at $c = 0$: a single
corner is enough, and the failure is visible in one line, the difference
quotient taking the value $1$ to the right of $0$ and $-1$ to the left.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := |x|$ ([[lem-of-abs-value]]), and the point $c := 0$.

[L1] Continuity of the absolute value ([[thm-algebra-of-continuous-functions]]): the identity is continuous at every point of its domain (claim 5), and $|h|$ is continuous wherever $h$ is (claim 2); so $f$ is continuous at every point of $\mathbb{R}$ ([[def-continuity-real]]).

[L2] Derivative ([[def-derivative]]): $0$ is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]); the difference quotient of $f$ at $0$ is $q(x) = (|x| - |0|)/(x - 0)$ on $\mathbb{R} \setminus \{0\}$; and $f$ is differentiable at $0$ exactly when $\lim_{x \to 0} q(x)$ exists ([[def-function-limit]]).

[L3] Absolute value ([[lem-of-abs-value]]): $|0| = 0$; $|u| = u$ for $u \ge 0$; and $|u| = -u$ for $u \le 0$.

[L4] One-sided limits ([[def-one-sided-limits]], [[def-interval]]): for $D \subseteq \mathbb{R}$ and $p \in \mathbb{R}$, the right limit of $h : D \to \mathbb{R}$ at $p$ is the limit at $p$ of $h$ restricted to $D \cap (p, \infty)$, defined when $p$ is a limit point of that set, and the left limit is the same with $D \cap (-\infty, p)$.

[L5] Two-sided against one-sided ([[thm-two-sided-limit-iff-both-one-sided]]): if $p$ is a limit point of both $D \cap (-\infty,p)$ and $D \cap (p,\infty)$, then for every real $L$ the equality $\lim_{x \to p} h(x) = L$ holds if and only if both one-sided limits at $p$ exist and equal $L$.

[L6] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); and the limit of a constant function $K$ at a limit point of its domain is $K$, any $\delta$ serving ([[def-function-limit]]).

[L7] $1 \ne -1$: $0 < 1$ ([[cor-of-one-positive]]) gives $-1 < 0 < 1$, and trichotomy forbids equality.

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous at every point of $\mathbb{R}$, in particular at $0$. [L1]

1.2 $f(0) = |0| = 0$, so the difference quotient of $f$ at $0$ is $q(x) = |x|/x$ on $D := \mathbb{R} \setminus \{0\}$. [L2, L3]

1.3 $D \cap (0,\infty) = (0,\infty)$ and $D \cap (-\infty,0) = (-\infty,0)$, and $0$ is a limit point of each: for every real $\varepsilon > 0$ the point $\varepsilon/2$ lies in $(0,\infty)$ with $0 < |\varepsilon/2 - 0| < \varepsilon$, and $-\varepsilon/2$ lies in $(-\infty,0)$ with $0 < |-\varepsilon/2 - 0| < \varepsilon$. [L3, L4]

2.1 For $x > 0$ one has $|x| = x$, so $q(x) = x/x = 1$; for $x < 0$ one has $|x| = -x$, so $q(x) = (-x)/x = -1$. Thus $q$ restricted to $(0,\infty)$ is the constant $1$ and $q$ restricted to $(-\infty,0)$ is the constant $-1$. [step 1.2, L3]

3.1 By [L6] and step 1.3 the two restrictions have limits at $0$, namely $1$ and $-1$; so by [L4] the right limit of $q$ at $0$ is $1$ and the left limit is $-1$. [step 1.3, step 2.1, L4, L6]

4.1 Suppose $\lim_{x \to 0} q(x) = L$ for some real $L$. By step 1.3 the point $0$ is a limit point of both one-sided sets, so [L5] forces both one-sided limits to equal $L$; with step 3.1 and [L6] that gives $L = 1$ and $L = -1$, hence $1 = -1$, which [L7] forbids. So $q$ has no limit at $0$, and by [L2] the function $f$ is not differentiable at $0$. [step 3.1, L2, L5, L6, L7]

5.1 The refuted claim therefore fails at $A := \mathbb{R}$, $f := |\cdot|$ and $c := 0$: the point $0$ is a limit point of $\mathbb{R}$, $f$ is continuous at $0$ by step 1.1, and $f$ is not differentiable at $0$ by step 4.1. [step 1.1, step 4.1] ∎

## Remarks

- **The failure is one-sided in a precise sense.** Both one-sided limits of the difference quotient exist; they simply disagree. So this is not a function whose difference quotients oscillate or blow up, and the restriction of $f$ to $[0,\infty)$ is differentiable at $0$ with derivative $1$, as [[def-derivative]] records when it observes that differentiability is a property of the pair (function, domain).

- **What this says about [[cor-differentiable-implies-continuous]].** That implication is strict: continuity is genuinely weaker than differentiability, and this witness shows the gap opens at a single point of an otherwise unremarkable function. Nothing here suggests the gap is small in any other sense; how large the set of non-differentiability of a continuous function can be is not a question this page can pose.

- **Why the argument needs [[thm-two-sided-limit-iff-both-one-sided]] and not merely two computations.** Two different one-sided values do not by themselves contradict anything until one knows that a two-sided limit would have to agree with both, and that is exactly what the cited theorem supplies, under the hypothesis that $0$ is approached from both sides inside the domain.
````

### `ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative`

````markdown
---
id: ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative
kind: example
title: "$x \\mapsto x^{3}$ is increasing on $\\mathbb{R}$ although its derivative vanishes at $0$, which is the witness for the false statement that a vanishing derivative forbids strict increase, and which makes its inverse non-differentiable at $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-vanishing-derivative-forbids-strict-increase, def-derivative, lem-derivative-of-a-power, def-monotone-function, thm-monotonicity-from-the-derivative, def-integer-power, thm-derivative-of-an-inverse, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-canonical-natural, lem-of-naturals-positive, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$x^{3}$ increases with $f'(0)=0$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Stationary point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stationary_point"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Inverse function rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_rule"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Let $f : \mathbb{R} \to \mathbb{R}$ be $f(x) = x^{3}$ ([[def-integer-power]]),
with $\iota$ the canonical natural of [[def-canonical-natural]].

**Claim 1.** $f$ is differentiable at every $c \in \mathbb{R}$ with
$f'(c) = \iota(3)c^{2}$, and $f'(0) = 0$.

**Claim 2.** $f$ is increasing on $\mathbb{R}$, in the strict sense of
[[def-monotone-function]].

**Claim 3.** So the hypothesis "$f' > 0$ at every interior point" of claim 2 of
[[thm-monotonicity-from-the-derivative]] is **sufficient but not necessary** for
a function on an interval to be increasing; and the converse recorded there,
claim 5, which gives only $f' \ge 0$, cannot be strengthened to $f' > 0$.

**Claim 4.** $f$ is continuous and injective on $\mathbb{R}$, so it has a
continuous inverse $g$ on $f[\mathbb{R}]$
([[thm-derivative-of-an-inverse]]); and since $f'(0) = 0$, that inverse is
**not** differentiable at $f(0) = 0$.

Claims 1 and 2 are established in the refutation of
[[fs-vanishing-derivative-forbids-strict-increase]] and are quoted here; claims
3 and 4 are the two consequences worth drawing from them.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^{3}$.

[L1] The refutation of [[fs-vanishing-derivative-forbids-strict-increase]] establishes, for this $f$: that $f$ is differentiable at every real $c$ with $f'(c) = \iota(3)c^{2}$ ([[lem-derivative-of-a-power]], [[def-derivative]]); that $f'(0) = 0$; and that $f$ is increasing on $\mathbb{R}$ ([[def-monotone-function]]).

[L2] A strictly monotone function is injective ([[def-monotone-function]], [[def-injection-surjection-bijection]]).

[L3] $x \mapsto x^{n}$ is continuous at every point of its domain, for every natural $n$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]).

[L4] $\mathbb{R}$ is order-convex and has at least two elements ([[def-interval]], [[lem-of-naturals-positive]]).

[L5] Derivative of an inverse ([[thm-derivative-of-an-inverse]]): for $I$ order-convex with at least two elements and $f : I \to \mathbb{R}$ continuous and injective, with inverse $g : f[I] \to I$, and for $c \in I$ at which $f$ is differentiable, if $f'(c) = 0$ then $g$ is not differentiable at $f(c)$.

[L6] Monotonicity from the derivative ([[thm-monotonicity-from-the-derivative]]): claim 2 says that $f' > 0$ at every interior point of an interval gives an increasing function, and claim 5 says that an increasing function differentiable at a limit point of the interval has $f' \ge 0$ there.

[L7] $0^{3} = 0$, since $0^{n} = 0$ for every natural $n \ge 1$ ([[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 **Claims 1 and 2.** By [L1] the function $f$ is differentiable at every $c \in \mathbb{R}$ with $f'(c) = \iota(3)c^{2}$, its derivative at $0$ is $0$, and $f$ is increasing on $\mathbb{R}$. [L1]

2.1 $f$ is injective by [L2], being increasing; it is continuous on $\mathbb{R}$ by [L3]; and $\mathbb{R}$ is order-convex with at least two elements by [L4]. So $f$ satisfies every hypothesis of [L5] with $I := \mathbb{R}$. [step 1.1, L2, L3, L4, L5]

2.2 **Claim 3.** The hypothesis of claim 2 of [L6] fails for $f$ on $\mathbb{R}$, since $f'(0) = 0$ is not positive, and yet the conclusion holds, $f$ being increasing on $\mathbb{R}$ by step 1.1. So that hypothesis is sufficient and not necessary. Likewise the conclusion $f' \ge 0$ of claim 5 of [L6] is attained with equality at $0$ by step 1.1, so it cannot be strengthened to $f' > 0$. [step 1.1, L6]

3.1 **Claim 4.** By step 2.1 the hypotheses of [L5] hold, and by step 1.1 the function $f$ is differentiable at $0$ with $f'(0) = 0$. So [L5] gives that the inverse $g : f[\mathbb{R}] \to \mathbb{R}$ is not differentiable at $f(0)$, which is $0$ by [L7]. [step 1.1, step 2.1, L5, L7]

4.1 All four claims are verified: claims 1 and 2 by step 1.1, claim 3 by step 2.2 and claim 4 by step 3.1. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **The set $f[\mathbb{R}]$ is not identified here, and nothing needs it to be.** [[thm-derivative-of-an-inverse]] states its conclusion about the inverse on $f[I]$, whatever that set is; that $f[\mathbb{R}] = \mathbb{R}$, so that $g$ is the cube root on the whole line, would need a surjectivity argument this item does not make and does not use.

- **Two different false readings, one witness.** That $f'(c) = 0$ forbids strict increase is refuted by claim 2; that $f'(c) = 0$ marks a local extremum is refuted by the same fact, since an increasing function has no local extremum at an interior point of its interval. The second reading is the converse of [[thm-fermat-interior-extremum]], and this page records it here rather than as a separate false statement.

- **Where the inverse fails, and why it is not surprising.** Claim 4 is not a defect of the inverse rule but a theorem: wherever the derivative of an injective continuous function vanishes, the inverse cannot be differentiable, because the chain rule would then give the identity a derivative of $0$. The cube root at $0$ is the standard picture of that, a vertical tangent, and it is proved here without any picture.
````

### `fs-vanishing-derivative-forbids-strict-increase`

````markdown
---
id: fs-vanishing-derivative-forbids-strict-increase
kind: false-statement
title: "FALSE: if $f'(c) = 0$ then $f$ is not increasing on any interval containing $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, def-monotone-function, lem-derivative-of-a-power, thm-monotonicity-from-the-derivative, def-integer-power, lem-power-monotone, def-interval, lem-of-sign-rules, thm-algebra-of-continuous-functions, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, def-neighbourhood-r, def-interior-closure-boundary-r, def-ordered-field, def-limit-point-r]
justified_by: []
forward_refs: [ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]
aliases: []
landmark: false
short: "FALSE: $f'(c)=0$ forbids strict increase"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Stationary point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stationary_point"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $I \subseteq \mathbb{R}$ be an interval
([[def-interval]]), let $f : I \to \mathbb{R}$ and let $c \in I$ be a point at
which $f$ is differentiable with

$$f'(c) \;=\; 0$$

([[def-derivative]]). Then $f$ is **not** increasing on $I$, in the strict sense
of [[def-monotone-function]].

**Why it is tempting.** [[thm-monotonicity-from-the-derivative]] proves that
$f' > 0$ at every interior point gives an increasing function, and one reads the
implication backwards: if strict increase comes from a strictly positive
derivative, surely a derivative that fails to be strictly positive somewhere
must destroy the strict increase there. It does not. Claim 5 of that theorem is
the true converse, and it is non-strict: an increasing $f$ has $f' \ge 0$
wherever it is differentiable, and nothing forbids equality at isolated points.

## Facts & Assumptions

**Given:** The interval $I := \mathbb{R}$, the point $c := 0$ and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{3}$ ([[def-integer-power]], [[def-interval]]).

[L1] Power rule ([[lem-derivative-of-a-power]], claim 2): for a natural $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$.

[L2] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(n) > 0$ for every natural $n \ge 1$, so in particular $\iota(3) > 0$.

[L3] Powers ([[def-integer-power]]): $a^{0} = 1$, $a^{2} = a \cdot a$, and $0 \cdot a = 0$, so $0^{2} = 0$.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive and a product of two negative reals is positive; the order is total and transitive, and trichotomy holds.

[L5] Monotonicity from the derivative ([[thm-monotonicity-from-the-derivative]], claim 2): for $J$ order-convex and $h : J \to \mathbb{R}$ continuous on $J$ and differentiable at every interior point of $J$ with $h' > 0$ there, $h$ is increasing on $J$.

[L6] Continuity ([[thm-algebra-of-continuous-functions]], claim 5): $x \mapsto x^{n}$ is continuous at every point of its domain for every natural $n$; and continuity passes to a subset of the domain ([[def-continuity-real]]).

[L7] Restriction of the derivative ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]); and a point $p$ is interior to a set $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L8] Increasing on a set $J$ means $h(x) < h(y)$ for all $x, y \in J$ with $x < y$ ([[def-monotone-function]]).

[L9] A positive base has positive natural powers ([[lem-power-monotone]], claim 1).

## Refutation

**Proof technique:** direct.

1.1 By [L1] with $n := 3$, the function $f$ is differentiable at every real $c$ with $f'(c) = \iota(3)\,c^{2}$. In particular $f'(0) = \iota(3) \cdot 0^{2} = \iota(3) \cdot 0 = 0$ by [L3]. [L1, L3]

1.2 For every real $c \ne 0$ one has $c^{2} > 0$: if $c > 0$ this is [L9]; if $c < 0$ then $c^{2} = c \cdot c$ is a product of two negative reals, hence positive by [L3] and [L4]. Therefore $f'(c) = \iota(3)c^{2} > 0$ for every $c \ne 0$, being a product of two positive reals by [L2] and [L4]. [L2, L3, L4, L9]

1.3 Put $I_1 := (-\infty, 0]$ and $I_2 := [0,\infty)$, both order-convex with at least two elements ([[def-interval]]). Every real $x < 0$ is interior to $I_1$, since $N_{|x|}(x) \subseteq (-\infty,0) \subseteq I_1$; and $0$ is **not** interior to $I_1$, since every $N_{\varepsilon}(0)$ contains $\varepsilon/2 > 0$, which is not in $I_1$. As every interior point of $I_1$ lies in $I_1$ and so satisfies $x \le 0$, the interior points of $I_1$ are exactly the reals $x < 0$. The same argument gives that the interior points of $I_2$ are exactly the reals $x > 0$. [L4, L7]

2.1 By [L6] the function $f$ is continuous on $\mathbb{R}$, hence $f|_{I_1}$ is continuous on $I_1$ and $f|_{I_2}$ is continuous on $I_2$. At every interior point $x$ of $I_1$ one has $x < 0$ by step 1.3, so $x$ is a limit point of $I_1$ by [L7] and $f|_{I_1}$ is differentiable at $x$ with derivative $f'(x) = \iota(3)x^{2} > 0$ by step 1.2 and [L7]. So [L5] gives that $f|_{I_1}$ is increasing on $I_1$; the same argument on $I_2$ gives that $f|_{I_2}$ is increasing on $I_2$. [step 1.2, step 1.3, L5, L6, L7]

3.1 Let $a, b \in \mathbb{R}$ with $a < b$. If $b \le 0$ then $a, b \in I_1$ and step 2.1 gives $f(a) < f(b)$. If $a \ge 0$ then $a, b \in I_2$ and step 2.1 gives $f(a) < f(b)$. Otherwise $b > 0$ and $a < 0$, so $a, 0 \in I_1$ with $a < 0$ gives $f(a) < f(0)$, while $0, b \in I_2$ with $0 < b$ gives $f(0) < f(b)$, and transitivity gives $f(a) < f(b)$. The three cases are exhaustive, since failing both $b \le 0$ and $a \ge 0$ means $b > 0$ and $a < 0$. So $f$ is increasing on $\mathbb{R}$ by [L8]. [step 2.1, L4, L8]

4.1 The false claim fails on this witness: $\mathbb{R}$ is an interval, $f$ is differentiable at $c = 0$ with $f'(0) = 0$ by step 1.1, and yet $f$ is increasing on $\mathbb{R}$ by step 3.1. So a vanishing derivative forbids nothing of the kind, and the claim is false. [step 1.1, step 3.1] ∎

## Remarks

- **What survives.** Claim 5 of [[thm-monotonicity-from-the-derivative]] is the correct converse and is non-strict: an increasing function differentiable at a point of its interval has $f' \ge 0$ there. This witness saturates that inequality at exactly one point, and no more can be said in general.

- **How large the vanishing set can be is not settled here.** The witness has $f' = 0$ at a single point. Nothing on this page says how big the set $\{ f' = 0 \}$ may be for an increasing $f$, and nothing here should be read as suggesting that it must be small.

- **The same function is the standard witness for a second false reading**, that a vanishing derivative marks a local extremum: $f$ has neither a local maximum nor a local minimum at $0$, precisely because it is increasing. [[ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]] on the companion page computes the derivative in full and draws the further consequence, through [[thm-derivative-of-an-inverse]], that the inverse of this function is not differentiable at $0$.
````

### `rem-derivative-conventions`

````markdown
---
id: rem-derivative-conventions
kind: remark
title: "What is fixed here and what is not: the derivative is taken at a point of the domain that is also a limit point of it, one-sided derivatives and derivatives of order above one are not introduced at this point in the reading order, and $f'(c)$ and $\\frac{df}{dx}(c)$ name the same real number"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-function-limit, def-limit-point-r, def-one-sided-limits, def-interval, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-an-inverse, thm-derivative-linear-approximation-form, lem-derivative-of-a-power, thm-fermat-interior-extremum, cor-bounded-derivative-implies-lipschitz]
justified_by: []
aliases: []
landmark: false
short: "conventions for the derivative"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "Notation for differentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Notation_for_differentiation"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

This page fixes fewer conventions than a reader of a calculus text may expect,
and it is worth saying which, so that a later page can rely on them and so that
nothing here is read as more than it is.

**Where a derivative may be taken.** $f'(c)$ is defined only when $c$ belongs to
the domain $A$ of $f$ **and** is a limit point of $A$ ([[def-derivative]],
[[def-limit-point-r]]). At an isolated point of $A$ the symbol is not defined,
and the function is neither differentiable nor non-differentiable there: the
question is not posed. This is inherited from [[def-function-limit]], which
leaves $\lim_{x \to c}$ undefined at an isolated point for the reason recorded
there, namely that the $\varepsilon$-$\delta$ condition would be satisfied
vacuously by every real at once.

**The domain is part of the data.** "Differentiable at $c$" is a statement about
the pair $(f, A)$ and the point $c$, not about $f$ near $c$ in isolation.
Shrinking the domain preserves differentiability and the value of the derivative
whenever the smaller domain still has $c$ as a limit point
([[def-derivative]]), but enlarging it need not, and the companion page's
witness at a corner shows that it need not. Wherever a statement on this page
says "differentiable at every point of $(a,b)$" for a function on $[a,b]$, the
domain meant is $[a,b]$.

**One-sided derivatives are not introduced at this point in the reading order.**
No item up to this point in the reading order defines one, and nothing below may
be cited as though one had been. The ingredient is available:
[[def-one-sided-limits]] defines the limit of $f$ at $c$ from the right as the
limit at $c$ of the restriction of $f$ to $A \cap (c, \infty)$
([[def-interval]]), and a right derivative would be that limit applied to the
difference quotient. Nothing on this page needs it, so nothing on this page
defines it. What does occur, and should not be confused with it, is the
derivative at an **endpoint of an interval**: for $f$ on $[a,b]$ the symbol
$f'(a)$ is defined by [[def-derivative]] without any new convention, because the
domain supplies points on one side of $a$ only and the difference quotient is a
function on $(a,b]$. So the object other texts call a one-sided derivative
appears here as an ordinary derivative on a domain that happens to lie on one
side.

**Derivatives of order above one are not introduced at this point in the reading
order** either, and no item up to this point in the reading order defines one.
A later page takes them up; nothing on this page anticipates it. Doing so
requires more than iterating the definition: $f'$ is a function on the set of
points at which $f$ is differentiable, and to differentiate *that* function at a
point one needs the point to be a limit point of that set, which is a hypothesis
about $f$ and not a formality. No statement on this page mentions $f''$, and
none should be read as implying anything about it.

**Two notations, one object.** $f'(c)$ and $\frac{df}{dx}(c)$ name the same real
number. The second is a name, not a quotient: nothing in this library divides
$df$ by $dx$, no object called $df$ is introduced, and the letter $x$ in it is a
name for the argument of $f$ and not a variable that is being fixed or varied.
This page writes $f'(c)$ throughout.

**Two descriptions, one notion.** By [[thm-caratheodory-characterisation]],
"$f$ is differentiable at $c$" may be read either as the convergence of the
difference quotient or as the existence of a factorisation
$f(x) - f(c) = \varphi(x)(x-c)$ with $\varphi$ continuous at $c$. The two are
equivalent, and the factor is unique, so either may be taken as the meaning of
the word without ambiguity. **Every statement on this page is phrased in the
first**, and the two readings divide the proofs between them: the differentiation
rules use the factorisation, namely
[[cor-differentiable-implies-continuous]], [[thm-algebra-of-derivatives]],
[[thm-chain-rule]] and [[thm-derivative-of-an-inverse]], each exhibiting a factor
and reading its continuity off the algebra of continuous functions; while the
rest of the page works with the difference quotient directly, among them
[[thm-derivative-linear-approximation-form]], the base cases of
[[lem-derivative-of-a-power]], and [[thm-fermat-interior-extremum]], whose whole
mechanism is the sign of the quotient near the point.

**What is deliberately not claimed anywhere on this page.** That $f'$ is
continuous where it exists; that differentiability **alone**, with no hypothesis
on $f'$, gives any regularity beyond the continuity of
[[cor-differentiable-implies-continuous]] — a *bound* on $f'$ does give more,
and that is [[cor-bounded-derivative-implies-lipschitz]]; and that a vanishing
derivative marks a local extremum. None of the three is
addressed here, and no item on this page may be cited for any of them. What *is*
recorded, as the two false statements of this page, is that the mean value
theorem needs continuity on the closed interval and that a vanishing derivative
at a point does not prevent a function from being increasing; each carries its
own witness.
````

