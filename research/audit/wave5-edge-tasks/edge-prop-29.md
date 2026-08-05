# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `lem-q-and-irrationals-dense-r`

## The target, as it actually stands on disk

`items/lem-q-and-irrationals-dense-r.md` — lemma — Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable

#### Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L2] Every nonempty open subset of $\mathbb R$ contains a rational point ([[lem-q-and-irrationals-dense-r]]).


---

# Citation-precision audit — everything that cites `lem-finite-choice`

## The target, as it actually stands on disk

`items/lem-finite-choice.md` — lemma — Every natural-number-indexed list of nonempty sets has a choice function on its family of values

#### Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L5] Finite choices may be assembled into a tuple, and a subset of an at most countable set is at most countable ([[lem-finite-choice]], [[lem-subset-of-countable]]).


---

# Citation-precision audit — everything that cites `thm-algebra-of-continuous-functions`

## The target, as it actually stands on disk

`items/thm-algebra-of-continuous-functions.md` — theorem — Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function

#### Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L4] Sums, products, and quotients with nowhere-zero denominator of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-componentwise-limits-and-continuity]]).


---

# Citation-precision audit — everything that cites `thm-continuous-image-of-a-connected-space`

## The target, as it actually stands on disk

`items/thm-continuous-image-of-a-connected-space.md` — theorem — A continuous image of a connected space is connected, and connectedness is a topological property

#### Statement

Let $X$ and $Y$ be topological spaces and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Subsets carry the subspace topology
([[def-subspace-topology-top]]). Then:

1. **Images.** If $A \subseteq X$ is a connected subset of $X$
   ([[def-connected-space]]) then $f[A]$ is a connected subset of $Y$. In
   particular, if $X$ is connected then $f[X]$ is connected, and if $f$ is
   moreover surjective then $Y$ is connected.
2. **Topological invariance.** If $h : X \to Y$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]) then $X$ is connected if and only if
   $Y$ is. So connectedness is a **topological property**.

Nothing is assumed about $f$ beyond continuity: it need not be injective, open,
closed or surjective. Note the direction — a continuous **image** of a connected
space is connected, while a continuous **preimage** need not be, since a constant
map from a disconnected space is continuous.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$

- [L2] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).
