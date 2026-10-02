---
id: ex-combing-a-four-strand-braid-word
kind: example
title: "Combing a four-strand braid word"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-zariski-braid-combing-words-alpha-and-x,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors,
       lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter,
       lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel,
       lem-every-trivial-braid-word-combs-as-w-one-w-two,
       lem-geometric-three-strand-braid-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 19-22"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

In $B_4$ consider the word
$$W=\sigma_3\sigma_2\sigma_3\sigma_2^{-1}\sigma_3^{-1}\sigma_2^{-1}\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}.$$
Its first six letters cancel by one three-strand relation and the last six
letters are $\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}$,
itself trivial in $B_3$ by one three-strand relation, so $W$ traces the trivial
geometric braid. Tracking the last point gives the position sequence
$$4,3,2,2,3,4,4,4,4,4,4,4,4;$$
prefix insertion writes $W$ as a product of twelve combing factors, and the
six-case reduction reduces them, in order, to
$$x_3,\ x_2,\ \sigma_2,\ x_2^{-1},\ x_3^{-1},\ \sigma_2^{-1},\ \sigma_1,\ \sigma_2,\ \sigma_1,\ \sigma_2^{-1},\ \sigma_1^{-1},\ \sigma_2^{-1}.$$
Collecting the $x$-letters to the left gives $W\equiv W_1W_2$ with
$$W_1=x_3x_2x_2^{-1}x_3^{-1}x_2x_2^{-1},$$
which freely reduces to the empty word, and
$$W_2=\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1},$$
which is trivial in $B_3$ by one three-strand relation. This is the first
nontrivial instance of the combing algorithm: the word $W$ is not itself
freely trivial, and after combing its two factors become trivial for two
different reasons -- free cancellation for $W_1$, the three-strand relation for
$W_2$ -- which are exactly the two mechanisms the completeness proof uses.

## Facts & Assumptions

**Given:** The group $B_4=\langle\sigma_1,\sigma_2,\sigma_3\rangle$ of [[def-braid-group-by-the-artin-presentation]] with its two Artin relations, the words $\alpha_j,x_j$ of [[def-zariski-braid-combing-words-alpha-and-x]] for $n=4$, and the word $W$ displayed above.

[F1] In $B_4$ the relations $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$ hold, adjacent inverse $\sigma$-pairs may be freely inserted and deleted, and the geometric assignment $\varphi_4$ sending $\sigma_i$ to the class of the elementary half twist is a homomorphism ([[def-braid-group-by-the-artin-presentation]], [[prop-the-artin-presentation-surjects-onto-geometric-braids]]); in particular a word equivalent to the empty word by these moves represents the trivial geometric braid, and the geometric three-strand relation $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ holds among the half twists ([[lem-geometric-three-strand-braid-relation]]).

[F2] The combing words satisfy $\alpha_j=\sigma_j\sigma_{j+1}\cdots\sigma_3$ for $1\le j\le3$, $\alpha_4=1$, and $x_j=\alpha_{j+1}^{-1}\sigma_j^{2}\alpha_{j+1}$; explicitly $\alpha_3=\sigma_3$, $\alpha_2=\sigma_2\sigma_3$, $\alpha_1=\sigma_1\sigma_2\sigma_3$, $x_3=\sigma_3^{2}$, $x_2=\sigma_3^{-1}\sigma_2^{2}\sigma_3$ and $x_1=\sigma_3^{-1}\sigma_2^{-1}\sigma_1^{2}\sigma_2\sigma_3$ ([[def-zariski-braid-combing-words-alpha-and-x]]).

[F3] Prefix insertion: if $W$ is a word in $\sigma_1^{\pm1},\dots,\sigma_3^{\pm1}$ whose geometric image is trivial, $j_k$ is the position of the tracked point after the first $k$ letters with $j_0=j_{12}=4$, and $F_k:=\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\varepsilon_k}\alpha_{j_k}$ for the $k$-th letter $\sigma_{i_k}^{\varepsilon_k}$ of $W$, then $W$ is equivalent to $\prod_{k=1}^{12}F_k=F_1F_2\cdots F_{12}$ by insertions of pairs $\alpha_j\alpha_j^{-1}$ ([[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors]]).

[F4] Six-case reduction: a combing factor $F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_{j'}$, where $j'=k+1$ if $j=k$, $j'=k$ if $j=k+1$ and $j'=j$ otherwise, reduces using only the Artin relations and free cancellations to the empty word ($j=k$, $\varepsilon=1$), to $x_k^{-1}$ ($j=k$, $\varepsilon=-1$), to $x_k$ ($j=k+1$, $\varepsilon=1$), to the empty word ($j=k+1$, $\varepsilon=-1$), to $\sigma_k^{\varepsilon}$ ($k<j-1$), and to $\sigma_{k-1}^{\varepsilon}$ ($k>j$) ([[lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter]]).

[F5] Conjugation table: for $1\le i\le2$ and $1\le j\le3$, $\sigma_ix_j\sigma_i^{-1}$ equals $x_j$ for $j<i$ or $j>i+1$, equals $x_i$ for $j=i+1$, and equals $x_i^{-1}x_{i+1}x_i$ for $j=i$, using only the two Artin relations and free cancellations ([[lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel]]).

## Verification

**Proof technique:** direct.

1.1 **The two halves of $W$ are trivial.** In $B_4$ the relation $\sigma_3\sigma_2\sigma_3=\sigma_2\sigma_3\sigma_2$ replaces the first three letters of $W$, and then two free deletions give $\sigma_2\sigma_3\sigma_2\sigma_2^{-1}\sigma_3^{-1}\sigma_2^{-1}\equiv\sigma_2\sigma_3\sigma_3^{-1}\sigma_2^{-1}\equiv\sigma_2\sigma_2^{-1}\equiv 1$; the same relation with index $1$ gives $\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}\equiv\sigma_2\sigma_1\sigma_2\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}\equiv\sigma_2\sigma_1\sigma_1^{-1}\sigma_2^{-1}\equiv 1$ for the last six letters. Hence $W$ is equivalent to the empty word, and $\varphi_4(W)=1$ because $\varphi_4$ is a homomorphism: $W$ traces the trivial geometric braid. [F1]

2.1 **The position sequence.** Since the geometric image of $W$ is trivial, the tracked point returns to its initial position, $j_{12}=j_0=4$. The letter $\sigma_k^{\pm1}$ interchanges positions $k$ and $k+1$ and fixes the others, so the tracked point passes from position $4$ to $3$ at the first letter $\sigma_3$, from $3$ to $2$ at $\sigma_2$, stays at $2$ under the next $\sigma_3$, passes to $3$ at $\sigma_2^{-1}$ and back to $4$ at $\sigma_3^{-1}$; the remaining letters $\sigma_2^{-1}$ and the six letters with index at most $2$ act only on the first three positions, so the tracked point stays at $4$. The sequence is therefore $4,3,2,2,3,4,4,4,4,4,4,4,4$. [F3, step 1.1]

3.1 **The twelve combing factors.** With the positions of step 2.1 and $\alpha_4=1$, $\alpha_3=\sigma_3$, $\alpha_2=\sigma_2\sigma_3$ from [F2], [F3] writes $W$ as the product of the twelve factors $F_k=\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\varepsilon_k}\alpha_{j_k}$: $$F_1=\sigma_3^{2},\quad F_2=\sigma_3^{-1}\sigma_2^{2}\sigma_3,\quad F_3=\alpha_2^{-1}\sigma_3\alpha_2,\quad F_4=\sigma_3^{-1}\sigma_2^{-2}\sigma_3,\quad F_5=\sigma_3^{-1}\sigma_3^{-1},$$ and $F_6=\sigma_2^{-1}$, $F_7=\sigma_1$, $F_8=\sigma_2$, $F_9=\sigma_1$, $F_{10}=\sigma_2^{-1}$, $F_{11}=\sigma_1^{-1}$, $F_{12}=\sigma_2^{-1}$. [F2, F3, step 2.1]

4.1 **Six-case reduction.** By [F4], applied with the pair $(j,k,\varepsilon)$ of each factor: $F_1=\alpha_4^{-1}\sigma_3\alpha_3=x_3$ and $F_2=\alpha_3^{-1}\sigma_2\alpha_2=x_2$ (case $j=k+1$, $\varepsilon=1$); $F_3=\alpha_2^{-1}\sigma_3\alpha_2$ has $k=3>j=2$ and reduces to $\sigma_{k-1}=\sigma_2$; $F_4=\alpha_2^{-1}\sigma_2^{-1}\alpha_3=x_2^{-1}$ and $F_5=\alpha_3^{-1}\sigma_3^{-1}\alpha_4=x_3^{-1}$ (case $j=k$, $\varepsilon=-1$); and $F_6,\dots,F_{12}$ all have $k\le2<j-1=3$ (with $j=4$, so that $\alpha_j=1$ on both sides of the letter) and reduce to the letters $\sigma_2^{-1},\sigma_1,\sigma_2,\sigma_1,\sigma_2^{-1},\sigma_1^{-1},\sigma_2^{-1}$ themselves. Hence $$W\equiv x_3x_2\sigma_2x_2^{-1}x_3^{-1}\sigma_2^{-1}\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}.$$ [F4, step 3.1]

5.1 **Collecting the $x$-letters.** By [F5] with $i=2$: $\sigma_2x_2\sigma_2^{-1}=x_2^{-1}x_3x_2$, hence $\sigma_2x_2^{-1}=(x_2^{-1}x_3x_2)^{-1}\sigma_2=x_2^{-1}x_3^{-1}x_2\sigma_2$; and $\sigma_2x_3\sigma_2^{-1}=x_2$, hence $\sigma_2x_3^{-1}=x_2^{-1}\sigma_2$. Substituting these two identities into the word of step 4.1, $$x_3x_2(\sigma_2x_2^{-1})x_3^{-1}\sigma_2^{-1}(\text{rest})\equiv x_3x_2x_2^{-1}x_3^{-1}x_2(\sigma_2x_3^{-1})\sigma_2^{-1}(\text{rest})\equiv x_3x_2x_2^{-1}x_3^{-1}x_2x_2^{-1}\sigma_2\sigma_2^{-1}(\text{rest}),$$ where $(\text{rest})=\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}$; deleting the adjacent pair $\sigma_2\sigma_2^{-1}$ gives $W\equiv W_1W_2$ with $W_1=x_3x_2x_2^{-1}x_3^{-1}x_2x_2^{-1}$ and $W_2=\sigma_1\sigma_2\sigma_1\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}$. [F5, step 4.1]

6.1 **Both factors are trivial.** The word $W_1$ reduces to the empty word by the free cancellations $x_2x_2^{-1}$ and $x_3x_3^{-1}$: $x_3x_2x_2^{-1}x_3^{-1}x_2x_2^{-1}\equiv x_3x_3^{-1}x_2x_2^{-1}\equiv 1$. The word $W_2$ is trivial in the rank-3 subgroup: the braid relation $\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$ gives $W_2\equiv\sigma_2\sigma_1\sigma_2\sigma_2^{-1}\sigma_1^{-1}\sigma_2^{-1}\equiv\sigma_2\sigma_1\sigma_1^{-1}\sigma_2^{-1}\equiv 1$. Thus the combing algorithm decomposes $W$ into a factor that is freely trivial in the $x$-letters and a factor that is trivial on the lower rank, which is exactly the mechanism of [[lem-every-trivial-braid-word-combs-as-w-one-w-two]] and of the completeness theorem; the example illustrates that a word can fail to be freely trivial after combing while both of its combed factors are accounted for. ∎ [F4, F5, step 5.1]

## Remarks

- The example is choice-free: every move is an explicit word computation in $B_4$, and the only geometric input is the published validity of the three-strand relation and of the surjection $\varphi_4$, which are used to record that the triviality of $W$ in $B_4$ matches the triviality of the geometric braid.
- The three-strand relation appears twice for different purposes: inside step 1.1 it shows that $W$ itself is already trivial, while inside step 6.1 it shows that the lower-rank factor $W_2$ is trivial, which is the input the induction of the completeness theorem consumes.
