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

# Citation-precision audit — everything that cites `def-nat-addition`

## The target, as it actually stands on disk

`items/def-nat-addition.md` — definition — Addition of natural numbers

#### Definition

**Addition** $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is defined by
recursion on the second argument: for each fixed $m \in \mathbb{N}$,

$$m + 0 = m, \qquad m + \sigma(n) = \sigma(m + n).$$

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).


---

# Citation-precision audit — everything that cites `def-rationals`

## The target, as it actually stands on disk

`items/def-rationals.md` — definition — The rationals as equivalence classes of pairs of integers

#### Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

## The 1 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [[def-rationals]]).
- [L2] The embedding $q \mapsto \hat q$ is an injective, order-preserving field homomorphism of $\mathbb{Q}$ into $\mathbb{R}$, so every identity and inequality between rationals holds between their images and conversely ([[lem-rat-embeds-dense]], [[def-rationals]]).


---

# Citation-precision audit — everything that cites `def-order-topology-on-an-ordinal`

## The target, as it actually stands on disk

`items/def-order-topology-on-an-ordinal.md` — definition — The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

#### Definition

Let $\gamma$ be an ordinal ([[def-ordinal]]). Since $\gamma$ is the set of
ordinals below it and $\xi < \eta$ means $\xi \in \eta$, the following two
families of subsets of $\gamma$ are defined for $\beta \in \gamma$ and
$\alpha \in \gamma$:

$$[0,\beta] \;:=\; \{\, \xi \in \gamma : \xi \le \beta \,\} \;=\; \beta^{+}, \qquad (\alpha,\beta] \;:=\; \{\, \xi \in \gamma : \alpha < \xi \le \beta \,\} \;=\; \beta^{+} \setminus \alpha^{+} .$$

Both identifications are immediate: $\beta^{+} = \beta \cup \{\beta\}$ is the set
of ordinals $\le \beta$, and it is a subset of $\gamma$ because $\gamma$ is
transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).

Put

$$\mathcal{B}_\gamma \;:=\; \{\, [0,\beta] : \beta \in \gamma \,\} \;\cup\; \{\, (\alpha,\beta] : \alpha, \beta \in \gamma,\ \alpha < \beta \,\} .$$

**$\mathcal{B}_\gamma$ is a basis for a unique topology on $\gamma$**
([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
the **order topology on $\gamma$**. The obligation is discharged here.

*(B1), covering.* If $\xi \in \gamma$ then $\xi \in [0,\xi] \in \mathcal{B}_\gamma$,
so $\bigcup \mathcal{B}_\gamma = \gamma$. For $\gamma = 0 = \varnothing$ the
family is empty and $\bigcup \varnothing = \varnothing = \gamma$, so (B1) holds
there too.

*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
any two ordinals have a maximum and a minimum, namely the larger and the smaller
of the two, and for $\alpha_1, \alpha_2, \beta_1, \beta_2 \in \gamma$:

- $[0,\beta_1] \cap [0,\beta_2] = [0, \min\{\beta_1,\beta_2\}]$;
- $[0,\beta_1] \cap (\alpha_2,\beta_2] = (\alpha_2, \min\{\beta_1,\beta_2\}]$ when
  $\alpha_2 < \min\{\beta_1,\beta_2\}$, and $\varnothing$ otherwise;
- $(\alpha_1,\beta_1] \cap (\alpha_2,\beta_2] = (\max\{\alpha_1,\alpha_2\},\ \min\{\beta_1,\beta_2\}]$
  when $\max\{\alpha_1,\alpha_2\} < \min\{\beta_1,\beta_2\}$, and $\varnothing$
  otherwise.

In each case the intersection is either a member of $\mathcal{B}_\gamma$ or
empty, and in the empty case (B2) is vacuous, having no point to test. So (B2)
holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

**This definition is for ordinals only, and it says so.** The general order
topology of a linearly ordered set takes the open intervals, together with the
initial and final rays, as a basis. For an ordinal that family is the wrong one:
a successor $\beta^{+}$ has an immediate predecessor, so the smallest open
interval around it is already $\{\beta^{+}\}$, but no *interval* of the form
$(\alpha,\eta)$ isolates $0$, and the initial segments must be supplied
separately. The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.

**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a
limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;
if $\xi = \alpha^{+}$ then $\{\xi\} = (\alpha, \xi]$ is basic open; so every
non-limit point of $\gamma$ is isolated. If $\xi$ is a limit ordinal then every
basic set containing $\xi$ contains some $(\alpha,\xi]$ with $\alpha < \xi$, and
$\alpha^{+} < \xi$ because $\xi$ is a limit, so $\alpha^{+}$ is a second point of
that basic set; hence a limit point of $\gamma$ is not isolated. In particular
$\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the
unique non-isolated point of $\omega + 1$, and every ordinal $\gamma \le \omega$
carries the discrete topology ([[def-standard-topologies]]).

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-countability-profile-of-omega-one` (cross-batch, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `def-dependent-choice`

## The target, as it actually stands on disk

`items/def-dependent-choice.md` — definition — The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain

#### Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## The 1 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- **Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $\mathrm{DC}$ ([[def-dependent-choice]]), an integer $n\ge1$, and a nonempty Euclidean subset $A$.
