---
id: ex-characters-of-z-mod-five-and-their-orthogonality
kind: example
title: "The five characters of Z/5Z and their orthogonality"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-additive-character-of-a-finite-abelian-group, lem-additive-characters-are-one-dimensional-complex-representations, lem-additive-character-orthogonality-from-representation-orthogonality, def-integers-modulo-n, thm-standard-representatives-modulo-n, def-addition-and-multiplication-modulo-n, thm-integers-modulo-n-basic-algebra, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-addition-and-real-extension, def-complex-exponential, thm-complex-nth-roots-and-roots-of-unity, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-sum-of-roots-of-unity, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3 Example 1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

Put $\zeta:=\exp(2\pi i/5)$
([[def-complex-exponential]]). For $r=0,1,2,3,4$ and a class
$[s]\in\mathbb Z/5\mathbb Z$ with representative $0\le s\le4$
([[def-integers-modulo-n]]), put
$$\chi_r([s]):=\zeta^{rs}.$$
The five functions $\chi_0,\dots,\chi_4$ are exactly the additive characters
([[def-additive-character-of-a-finite-abelian-group]]) of
$\mathbb Z/5\mathbb Z$, their $5\times5$ character table has entries
$\zeta^{rs}$, and the entries satisfy
$$\frac15\sum_{s=0}^{4}\chi_r([s])\,\overline{\chi_t([s])}=\delta_{rt} \qquad(0\le r,t\le4).$$

## Facts & Assumptions

**Given:** The group $\mathbb Z/5\mathbb Z$ and $\zeta=\exp(2\pi i/5)$.

[L1] An additive character is a group homomorphism $G\to\mathbb C^{\times}$, so $\chi(x+y)=\chi(x)\chi(y)$ and $\chi(0)=1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[L2] Additive characters of a finite abelian group are exactly its irreducible complex characters: each is the trace character of a one-dimensional irreducible representation, every irreducible representation arises this way up to equivalence, all values have modulus one, and distinct additive characters give inequivalent representations ([[lem-additive-characters-are-one-dimensional-complex-representations]]).

[L3] Row orthogonality: for a finite abelian group $G$ and additive characters $\chi,\psi$ of $G$, $\frac{1}{|G|}\sum_{g\in G}\chi(g)\overline{\psi(g)}$ equals $1$ when $\chi=\psi$ and $0$ otherwise ([[lem-additive-character-orthogonality-from-representation-orthogonality]]).

[L4] In $\mathbb Z/5\mathbb Z$ classes satisfy $[a]=[b]$ exactly when $5\mid(a-b)$ ([[def-integers-modulo-n]]); the map $r\mapsto[r]$ is a bijection from $\{0,1,2,3,4\}$ onto $\mathbb Z/5\mathbb Z$, so $|\mathbb Z/5\mathbb Z|=5$ ([[thm-standard-representatives-modulo-n]]); addition is given by $[u]+[v]=[u+v]$, independently of representatives ([[def-addition-and-multiplication-modulo-n]]), and makes $\mathbb Z/5\mathbb Z$ an abelian group with identity $[0]$ ([[thm-integers-modulo-n-basic-algebra]]).

[L5] The complex exponential satisfies $\exp(z+w)=\exp z\exp w$ for all $z,w$ ([[thm-complex-exponential-addition-and-real-extension]]), and its kernel and fibres are given by $\ker(\exp)=2\pi i\mathbb Z$ and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L6] The $n$-th roots of unity in $\mathbb C$ are precisely the values $\exp\!\left(i\frac{2\pi k}{n}\right)$ with $0\le k<n$, for $n\ge1$ ([[thm-complex-nth-roots-and-roots-of-unity]]), and $|\exp(iy)|=1$ for every real $y$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L7] For every $n\ge2$ the sum of all $n$-th roots of unity is $0$ ([[cor-sum-of-roots-of-unity]]).

[L8] Complex conjugation is an involutive real-field automorphism; it fixes $1$, and for every $z$ one has $z\overline z=|z|^2$ with $|z|\ge0$, while $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct.

1.1 Compute $\zeta$: iterating the addition law [L5] gives $\zeta^{5}=\exp(5\cdot2\pi i/5)=\exp(2\pi i)=1$, because $2\pi i\in2\pi i\mathbb Z=\ker(\exp)$; and $\zeta\ne1$, since otherwise $2\pi i/5\in\ker(\exp)=2\pi i\mathbb Z$ would give $1/5\in\mathbb Z$, which is false. So $\zeta$ is a fifth root of unity different from $1$, and by [L6] the fifth roots of unity are exactly the five distinct values $1,\zeta,\zeta^{2},\zeta^{3},\zeta^{4}=\exp(2\pi ik/5)$, $0\le k<5$. [L5, L6, given, algebra]

2.1 **Well-definedness.** Suppose $[s]=[t]$ in $\mathbb Z/5\mathbb Z$, so $5\mid(s-t)$ by [L4]; write $s=t+5m$ with $m\in\mathbb Z$. Then the integer power laws together with $\zeta^{5}=1$ give $\zeta^{rs}=\zeta^{rt}(\zeta^{5})^{rm}=\zeta^{rt}$, so the prescription $\chi_r([s]):=\zeta^{rs}$ does not depend on the chosen representative and defines a function $\chi_r:\mathbb Z/5\mathbb Z\to\mathbb C$ for each $r$. [L4, step 1.1, algebra]

2.2 **The five are distinct and exhaustive.** If $\chi_r=\chi_t$, evaluating at $[1]$ gives $\zeta^{r}=\zeta^{t}$, that is $\exp(2\pi ir/5)=\exp(2\pi it/5)$, and [L5] gives $2\pi i(r-t)/5\in2\pi i\mathbb Z$, so $5\mid(r-t)$; as $0\le r,t\le4$ this forces $r=t$. Conversely let $\chi$ be any additive character and put $\lambda:=\chi([1])$; five applications of multiplicativity in [L1], together with $[1]+[1]+[1]+[1]+[1]=[5]=[0]$ in [L4], give $\lambda^{5}=\chi([1])^{5}=\chi([5])=\chi([0])=1$, so $\lambda$ is a fifth root of unity and by step 1.1 there is a unique $k\in\{0,1,2,3,4\}$ with $\lambda=\zeta^{k}$. For $0\le s\le4$ one has $[s]=s\cdot[1]$, whence $\chi([s])=\lambda^{s}=\zeta^{ks}=\chi_k([s])$; therefore $\chi=\chi_k$, and every additive character of $\mathbb Z/5\mathbb Z$ occurs among the five. [L1, L4, L5, step 1.1, given]

3.1 **Each $\chi_r$ is an additive character.** By [L4], $[s]+[t]=[s+t]$, so $\chi_r([s]+[t])=\zeta^{r(s+t)}=\zeta^{rs}\zeta^{rt}=\chi_r([s])\chi_r([t])$; every value is one of the fifth roots of unity listed in step 1.1 and hence nonzero. So $\chi_r:\mathbb Z/5\mathbb Z\to\mathbb C^{\times}$ is a group homomorphism, that is, an additive character of $\mathbb Z/5\mathbb Z$, by [L1]. [L1, L4, step 1.1, step 2.1]

3.2 **The table and its orthogonality.** By [L2] the five additive characters are exactly the irreducible complex characters of $\mathbb Z/5\mathbb Z$, so the array of values $T_{rs}=\chi_r([s])=\zeta^{rs}$ is the character table of the group: its rows, for $r=0,1,2,3,4$, are $(1,1,1,1,1)$, $(1,\zeta,\zeta^{2},\zeta^{3},\zeta^{4})$, $(1,\zeta^{2},\zeta^{4},\zeta,\zeta^{3})$, $(1,\zeta^{3},\zeta,\zeta^{4},\zeta^{2})$ and $(1,\zeta^{4},\zeta^{3},\zeta^{2},\zeta)$. By [L4] the group has order $5$ and its five elements are $[0],\dots,[4]$, so row orthogonality [L3] applied to $\chi_r$ and $\chi_t$ gives exactly $\frac15\sum_{s=0}^{4}\chi_r([s])\overline{\chi_t([s])}=\delta_{rt}$. As a direct check of an off-diagonal entry, for $r=1$ and $t=0$ the summands are $\zeta^{s}\overline{1}=\zeta^{s}$, and $\sum_{s=0}^{4}\zeta^{s}=0$ by [L7], since step 1.1 lists $1,\zeta,\zeta^{2},\zeta^{3},\zeta^{4}$ as the five fifth roots of unity; on the diagonal $\chi_r([s])\overline{\chi_r([s])}=|\zeta^{rs}|^{2}=1$ by [L6] and [L8], so each diagonal average is $\frac15\cdot5=1$. [L2, L3, L4, L6, L7, L8, step 1.1, step 2.2]

4.1 Steps 2.1 and 3.1 show that each $\chi_r$ is a well-defined additive character, step 2.2 that they are pairwise distinct and are all of them, and step 3.2 computes the table and verifies its orthogonality; this proves every claim of the example. [step 2.1, step 3.1, step 2.2, step 3.2] ∎
