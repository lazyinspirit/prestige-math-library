---
id: cor-birkhoff-strong-law-for-iid-coordinate-shifts
kind: corollary
title: Birkhoff strong law for iid coordinate shifts
deps: ["thm-birkhoff-ergodic-probability-case-for-strong-laws", "thm-countable-product-of-probability-spaces", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "thm-kolmogorov-zero-one-law", "thm-measure-preservation-on-a-generating-pi-system", "def-ergodic-measure-preserving-system", "def-axiom-of-choice", "def-countable-choice", "def-dependent-choice", "thm-recursion"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Examples 6.1.4–6.1.5 pp.332–333; Theorem 6.2.1, Lemma 6.2.2 and Example 6.2.3, pp.335–337
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. On the canonical countable product of an integrable real probability law, the left shift is measure preserving and ergodic. Its coordinate averages converge almost surely and in $L^1$ to the common mean by the ergodic theorem.

## Facts & Assumptions

[F1] [[def-axiom-of-choice]]: The **Axiom of Choice** (AC) is the following statement.

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

[F2] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of def-choice-function: every at most
countable family of nonempty sets (def-countable) has a choice function.

[F3] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F4] [[def-dependent-choice]]: Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
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

[F5] [[thm-countable-product-of-probability-spaces]]: Assume countable choice and dependent choice. For probability spaces $(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure on the canonical countable-product sigma-algebra having the prescribed finite product marginals.

[F6] [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]: Under the measure of F5, the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

[F7] [[thm-measure-preservation-on-a-generating-pi-system]]: Let $T:X\to X$ be measurable on $(X,\mathcal A,\mu)$. Let $\mathcal P$ be a $\pi$-system generating $\mathcal A$, with an increasing sequence $P_n\in\mathcal P$ covering $X$ and satisfying $\mu(P_n)<\infty$. If $\mu(T^{-1}P)=\mu(P)$ for every $P\in\mathcal P$, then $T$ preserves $\mu$. For finite $\mu$, a generating $\pi$-system can be enlarged by $X$ to meet the exhaustion condition.

[F8] [[thm-kolmogorov-zero-one-law]]: Let $(X_n)_{n\in\mathbb N}$ be an independent sequence of random elements, and
let $\mathcal T(X_n:n\in\mathbb N)$ be its tail $\sigma$-algebra. Then every event
$A\in\mathcal T(X_n:n\in\mathbb N)$ satisfies
$$\mathbb P(A)\in\{0,1\}.$$

[F9] [[def-ergodic-measure-preserving-system]]: A measure-preserving system is **ergodic for $\mu$** if each $E\in\mathcal I$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$, with $\mathcal I$ as in def-strict-and-mod-null-invariant-$\sigma$-algebras. For a probability system this means $\mu(E)\in\{0,1\}$. The definition is relative to the invariant measure; no probability assumption is implicit in the general null/conull formulation.

[F10] [[thm-birkhoff-ergodic-probability-case-for-strong-laws]]: If $T$ is an ergodic measure-preserving transformation of a probability space and $f$ is an integrable real-valued measurable function, then $A_nf=n^{-1}\sum_{j=0}^{n-1}f\circ T^j\to c=\int f\,dP$ almost surely and in $L^1$. Invertibility is not required.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 AC (F1) selects a member of each set in any prescribed countable nonempty family, giving F2. For an entire relation R on a nonempty A, AC selects $s(a)\in\{b:aRb\}$ for every a. F3 iterates s from any prescribed $a_0$, yielding $a_{n+1}=s(a_n)$ and thus F4. Hence F5 has its CC and DC hypotheses satisfied and constructs the canonical countable product; F6 gives its coordinate maps their common law and independence. [F1, F2, F3, F4, F5, F6]

1.2 Write $T(x_0,x_1,\ldots)=(x_1,x_2,\ldots)$. Pullbacks of finite coordinate cylinders are cylinders with shifted indices, so T is measurable. The product of the marginal probabilities of any such cylinder is unchanged on shifting all indices. F7 therefore extends equality of cylinder probabilities to all product-measurable sets, proving measure preservation. [F6, F7]

1.3 If a measurable E is strictly invariant, $E=T^{-n}E$ for every n. For each n, the class of sets B whose $T^{-n}B$ belongs to $\sigma(X_n,X_{n+1},\ldots)$ is a $\sigma$-algebra containing the cylinders, hence contains E. Thus E belongs to the coordinate tail $\sigma$-algebra. F8 gives P(E) in {0,1}, which is precisely F9. [F8, F9]

2.1 The zeroth coordinate f(x)=$x_0$ is integrable with integral equal to the common mean. Step 1.2 and step 1.3 verify the system hypotheses of F10. Its averages are exactly $A_nf=(x_0+\cdots+x_{n-1})/n$ for $n\ge1$, so both asserted modes of convergence follow without using the IID strong-law proof. [F10, step 1.3] ∎
