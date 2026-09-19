---
id: def-approximate-unit-and-proper-c-star-morphism
kind: definition
title: Approximate unit and proper C star morphism
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-star-algebra, def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.38 and Example 3.1.39, printed pp. 66–67"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Let $A$ be a complex C\*-algebra ([[def-c-star-algebra]]).

An **approximate unit** for $A$ is a net $(e_i)_{i \in I}$ — that is, a family
indexed by a directed set $I$; directed sets are nonempty here, so there is no
empty-net convention to add — such that each $e_i$ is a **positive contraction**
$e_i = e_i^*$, $e_i = b^*b$ for some $b$, and $\|e_i\| \le 1$
([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]),
and

$$\|e_i a - a\| \to 0 \quad\text{and}\quad \|a e_i - a\| \to 0 \qquad \text{for every } a \in A.$$

When $A$ is commutative the two conditions coincide, and one says simply
$e_i a \to a$. The algebra $A$ may be the zero algebra, in which case the
constant net $e_i = 0$ is an approximate unit.

Let $A$ and $B$ be complex C\*-algebras and let
$\varphi : A \to B$ be a bounded star-homomorphism in the sense of
[[def-c-star-algebra]], not required to be unital. Then $\varphi$ is **proper**
when it carries every approximate unit of $A$ to an approximate unit of $B$:
for every approximate unit $(e_i)$ of $A$, the net $(\varphi(e_i))$ is an
approximate unit of $B$ in the above sense.

Finally, for topological spaces, a continuous map $g : Y \to X$ is **proper**
when the inverse image of every compact subset of $X$ is a compact subset of
$Y$.

## Remarks

- **The unital case forces a unital target.** A unital C\*-algebra has the
  constant net $e_i=1_A$ as an approximate unit.  If $\varphi:A\to B$ is
  proper, the constant net $\varphi(1_A)$ is therefore an approximate unit of
  $B$, so $\varphi(1_A)b=b=b\varphi(1_A)$ for every $b\in B$.  Thus $B$ is
  unital and $\varphi(1_A)=1_B$; in the unital case properness is not weaker
  than unitality.
- **The two uses of "proper" are linked by the duality.** Under [[thm-locally-compact-gelfand-duality]] the proper continuous maps correspond exactly to the proper star-homomorphisms, and this is where the pullback of a compactly supported function uses the compact-preimage condition.
- **No choice principle is used in the definition.** The definition is a condition on nets and maps; existence of approximate units is the theorem [[thm-every-commutative-c-star-algebra-has-an-approximate-unit]].
