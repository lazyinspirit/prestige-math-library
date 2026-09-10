---
id: ex-almost-sure-frequency-of-heads
kind: example
title: Almost sure frequency of heads
deps: ["thm-countable-product-of-probability-spaces", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "cor-iid-finite-variance-strong-law", "def-axiom-of-choice", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "lem-variance-and-covariance-identities-for-random-variables", "def-countable-choice", "def-dependent-choice", "thm-recursion"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC and $0\le p\le1$. On the countable product of the law $P(\{1\})=p$, $P(\{0\})=1-p$, the proportion of the first n coordinates $x_0,\ldots,x_{n-1}$ that equal one converges almost surely to p.

## Facts & Assumptions

[F1] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space.
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Moreover, covariance is symmetric and bilinear on finite linear combinations.
On finite full-power-set probability spaces these formulas reduce to the
published finite identities.

[F2] [[def-axiom-of-choice]]: The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> (def-choice-function).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

[F3] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of def-choice-function: every at most
countable family of nonempty sets (def-countable) has a choice function.

[F4] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F5] [[def-dependent-choice]]: Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a function $x : \mathbb{N} \to X$ (def-function,
> def-natural-numbers) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

Here a sequence in $X$ means a function from $\mathbb{N}$ to $X$, not necessarily
a real-valued sequence. As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** def-choice-function and
def-axiom-of-choice select one element from each member of a family that is
fixed in advance, and def-countable-choice does the same for a family indexed
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
order-theoretic sense (def-chain). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

[F6] [[thm-countable-product-of-probability-spaces]]: Assume countable choice and dependent choice. For probability spaces $(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure on the canonical countable-product sigma-algebra having the prescribed finite product marginals.

[F7] [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]: Under the measure of F6, the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

[F8] [[cor-iid-finite-variance-strong-law]]: IID square-integrable real variables satisfy $S_n/n\to\mathbb EX_1$ almost surely.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The two nonnegative masses sum to one; summing them over subsets of {0,1} gives a countably additive probability measure. Its identity variable has $\mathbb EX=p$, $\mathbb EX^2=p$, and hence $\operatorname{Var}(X)=p-p^2$ by F1. [F1]

2.1 Under F2, applying a choice function to a countable nonempty family gives F3. For each entire relation R choose a successor s(a) for every a; F4 produces the iterates of s from a prescribed initial point, proving F5. Thus F6 constructs the canonical countable product and F7 makes its coordinate maps independent with the law in step 1.1. For $n\ge1$, put $Y_n(x)=x_{n-1}$; then $(Y_n)_{n\ge1}$ is IID with that law. [F2, F3, F4, F5, F6, F7, step 1.1]

3.1 F8 applies to $(Y_n)_{n\ge1}$ using the finite variance in step 1.1 and independence in step 2.1. Since $\sum_{k=1}^nY_k$ counts the ones among $x_0,\ldots,x_{n-1}$, it yields the displayed frequency limit. If $p=0$ or $p=1$, each coordinate equals that value almost surely, and a countable union of zero-probability exceptions is null. [F8, step 1.1, step 2.1] ∎
