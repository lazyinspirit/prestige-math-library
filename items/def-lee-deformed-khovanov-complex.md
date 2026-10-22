---
id: def-lee-deformed-khovanov-complex
kind: definition
title: Lee-deformed Khovanov complex and filtration
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-cochain-complex-in-an-abelian-category
  - def-filtered-chain-complex
  - def-increasing-and-decreasing-filtration-of-an-object
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §§2.3–2.4, printed pp. 3–5
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §5.5, printed pp. 94–97; §5.6, pp. 97–99
    - title: Eun Soo Lee, On Khovanov invariant for alternating links,
        arXiv:math/0210213v2
      url: https://arxiv.org/pdf/math/0210213v2
      locator: §§2–3, the rational deformation of the Frobenius maps
---

## Definition

Let $D$ be a finite regular oriented link diagram in the standard oriented $3$-sphere. Use the oriented Khovanov resolution cube, crossing order, signs, and shifts fixed in the integral Khovanov construction. Over $\mathbb Q$, replace its circle algebra by $A_L=\mathbb Q[X]/(X^2-1)$, with $\deg_q(1)=1$ and $\deg_q(X)=-1$, and structure maps
$$
\eta_L(1)=1,\quad \epsilon_L(1)=0,\quad \epsilon_L(X)=1,
$$
$$
m_L(1\otimes1)=1,\quad m_L(1\otimes X)=m_L(X\otimes1)=X,\quad m_L(X\otimes X)=1,
$$
$$
\Delta_L(1)=1\otimes X+X\otimes1,\quad \Delta_L(X)=1\otimes1+X\otimes X.
$$
For a resolution state $v$ with $k(v)$ circles, assign $A_L^{\otimes k(v)}$ and cohomological degree $i(v)=|v|-n_-$. On a tensor basis element whose circle labels are $a_1,\ldots,a_{k(v)}\in\{1,X\}$, set
$$
q(v;a_1,\ldots,a_{k(v)})=|v|+n_+-2n_-+\sum_{j=1}^{k(v)}\deg_q(a_j).
$$
The differential is the signed sum of the edge maps $m_L$ and $\Delta_L$. The resulting finite cochain complex is the **Lee-deformed Khovanov complex** $C_L(D;\mathbb Q)$. Its decreasing quantum filtration $F^pC_L(D;\mathbb Q)$ is spanned by basis elements of quantum degree at least $p$. Its homology with the induced filtration is the Lee homology of the diagram. The diagram-level definition does not by itself assert invariance under changing $D$.

For the empty link diagram, use its single empty resolution state and empty tensor term $\mathbb Q$ in cohomological and quantum degree $0$, with zero differential. Its induced decreasing filtration is $F^pC_L(\varnothing;\mathbb Q)=\mathbb Q$ for $p\leq0$ and $F^pC_L(\varnothing;\mathbb Q)=0$ for $p>0$.

The two equal composites in the diagram below are the Frobenius compatibility maps used on merge-split faces. The drawing names maps only; the proof checks the equality on the basis $\{1,X\}^{\otimes2}$.

```tikzcd
A_L\otimes A_L \arrow[r,"m_L"] \arrow[d,"\Delta_L\otimes\mathrm{id}"'] & A_L \arrow[d,"\Delta_L"] \\
A_L\otimes A_L\otimes A_L \arrow[r,"\mathrm{id}\otimes m_L"'] & A_L\otimes A_L
```

## Definition references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The crossing order, signed resolution cube, and quantum shift being deformed]]

[[def-cochain-complex-in-an-abelian-category|The cochain-complex convention]]

[[def-filtered-chain-complex|Filtered-complex convention]]

[[def-increasing-and-decreasing-filtration-of-an-object|Increasing and decreasing filtrations]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§2.3–2.4](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §§5.5–5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

[Lee, *On Khovanov invariant for alternating links* (2002), §§2–3](https://arxiv.org/pdf/math/0210213v2)

## Facts & Assumptions

**Given:** A finite regular oriented diagram $D$, an ordering of its crossing set, and the coefficient field $\mathbb Q$.

[F1] The normalized Khovanov cube uses a finite state set, the state degree $|v|-n_-$, the quantum shift $|v|+n_+-2n_-$, and a cube sign that reverses on opposite routes around each square face. ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]])

[F2] A cochain complex has a degree-$+1$ differential whose square is zero. ([[def-cochain-complex-in-an-abelian-category]])

## Proof

**Given:** The finite oriented resolution cube of $D$ and the operations in the Definition.

**Empty-link case:** For $D=\varnothing$, the state set is the singleton empty function, its empty tensor term is $\mathbb Q$ in degrees $(0,0)$, and there are no edges. The differential is zero and the degree-zero generator gives exactly the filtration stated in the Definition. Assume henceforth that $D$ is nonempty for the remaining checks.

1.1 The quotient $A_L=\mathbb Q[X]/(X^2-1)$ has basis $1,X$, and its multiplication table is the displayed $m_L$. Hence multiplication is associative and commutative with unit $1$. The counit identities follow on $1,X$: $(\epsilon_L\otimes\mathrm{id})\Delta_L(1)=1$, $(\epsilon_L\otimes\mathrm{id})\Delta_L(X)=X$, and the other counit composite gives the same values. [given, algebra]

2.1 For input $1$, both composites $(\Delta_L\otimes\mathrm{id})\Delta_L$ and $(\mathrm{id}\otimes\Delta_L)\Delta_L$ equal $1\otimes X\otimes X+X\otimes1\otimes X+1\otimes1\otimes1+X\otimes X\otimes1$. For input $X$, both equal $1\otimes1\otimes X+1\otimes X\otimes1+X\otimes1\otimes1+X\otimes X\otimes X$. Thus $\Delta_L$ is coassociative. Cocommutativity follows by swapping tensor factors in its two displayed values. [given, step 1.1, algebra]

3.1 On the ordered basis $1\otimes1,1\otimes X,X\otimes1,X\otimes X$, each of $(m_L\otimes\mathrm{id})(\mathrm{id}\otimes\Delta_L)$, $\Delta_Lm_L$, and $(\mathrm{id}\otimes m_L)(\Delta_L\otimes\mathrm{id})$ has outputs $1\otimes X+X\otimes1$, $1\otimes1+X\otimes X$, $1\otimes1+X\otimes X$, and $1\otimes X+X\otimes1$. The Frobenius identities therefore hold. On a cube square, two changes on disjoint circles commute by tensor functoriality; two merges give the same composite by associativity of $m_L$; two splits give the same composite by coassociativity of $\Delta_L$; and a merge-split pair gives the same composite by the Frobenius identities just checked. In each case the cube signs on the two routes are opposite, so the square contribution to $d_L^2$ is zero. Every length-two path in the cube lies in one such square, so summing over squares proves $d_L^2=0$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The terms of $m_L$ and $\Delta_L$ inherited from $\mathbb Q[X]/(X^2)$ have total quantum degree $0$ after the state shift. The new multiplication term $m_L(X\otimes X)=1$ changes the label degree from $-2$ to $1$, and the edge state shift adds $1$, so it raises $q$ by $4$. The new term $1\otimes1$ in $\Delta_L(X)$ changes label degree from $-1$ to $2$, and its edge state shift again adds $1$, so it raises $q$ by $4$. Thus every differential term preserves or raises $q$, making each $F^pC_L$ a subcomplex. The state set and each state module are finite, so only finitely many $q$-degrees occur and the filtration is finite. All algebra and cube checks use finite bases and no choice axiom. [F1, F2, step 3.1, algebra] ∎
