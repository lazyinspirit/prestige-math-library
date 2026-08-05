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
