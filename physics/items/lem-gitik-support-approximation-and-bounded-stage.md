---
id: lem-gitik-support-approximation-and-bounded-stage
kind: lemma
title: Finite-support symmetry and bounded-stage approximation
status: published
origin: pipeline
deps:
  - def-gitik-finite-support-symmetric-submodel
  - thm-gitik-expanded-proper-class-forcing-theorem
  - lem-symmetry-lemma-for-forcing-automorphisms
  - lem-gitik-restriction-amalgamation-and-prikry-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, Lemma 7, pages 9–10"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Dimitriou, Symmetric Models, Lemma 2.23 and its approximation consequence, pages 54–55"
      url: https://d-nb.info/1020630655/34
---

## Statement

Let $\vec\tau$ be hereditarily symmetric names with a common finite
$\operatorname{cf}'$-closed support $e$. For every formula $\varphi$ in the
pure membership language,

$$p\Vdash_3\varphi(\vec\tau)\quad\Longrightarrow\quad p\restriction e\Vdash_3\varphi(\vec\tau).$$

Consequently, every $x\in N_G$ has a finite support and lies in some set-sized
supported stage $N_{G_\theta}$. More sharply, if $x$ is a set of ordinals with
a name supported by $e$, then $x$ has a canonical name using only the finite
coordinate restriction $P_e$, so $x\in M[G\restriction e]$.

The restriction assertion is intentionally for the pure membership language.
It is not asserted for formulas mentioning the expanded predicate for the full
generic class.

## Facts & Assumptions

**Given:** The Gitik symmetric system and names/support as in the statement.

[F1] [[def-gitik-finite-support-symmetric-submodel]]: Finite coordinate stabilizers act on the completion, define hereditary symmetry, and every symmetric value lies in some complete set-stage interpretation.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]]: For pure forcing, $p\Vdash\varphi(\vec\tau)$ iff $\pi p\Vdash\varphi(\pi\vec\tau)$.

[F3] [[lem-gitik-restriction-amalgamation-and-prikry-property]]: Restrictions, finite support extensions, trunk cones and common-trunk intersections preserve conditions and give amalgamation.

[F4] [[thm-gitik-expanded-proper-class-forcing-theorem]]: The class forcing relation is definable and satisfies truth; its pure membership fragment agrees with the eventual set-stage relation.

## Proof

1.1 Suppose $p\Vdash_3\varphi(\vec\tau)$ but $p\restriction e$ does not force it. By the negation clause there is $q\le p\restriction e$ with $q\Vdash_3\neg\varphi(\vec\tau)$. Because the trunk of $q$ lies in its upper tree and that tree projects into the upper tree of $p\restriction e$, lift the trunk $q\restriction e$ to a node of the upper tree of $p$ and pass to its cone. This gives $p^*\le p$ with $p^*\restriction e=q\restriction e$. Use finite support extension and legal successor steps to obtain $p_1\le p^*$ and $q_1\le q$ on the same finite closed coordinate domain, with equal corresponding section lengths and still $p_1\restriction e=q_1\restriction e$. For each coordinate outside $e$, the finite bijection sending $p_1(\alpha)(n)$ to $q_1(\alpha)(n)$ extends to a finite permutation $\pi_\alpha$ of $\alpha$; take the identity on $e$, obtaining $\pi\in H_e$. Shrink the upper tree $U_1$ of $p_1$ so that no value newly appearing outside $e$ lies in the finite range of $q_1$ at that coordinate, and shrink the upper tree $V_1$ of $q_1$ symmetrically away from the range of $p_1$. The coordinate filters are uniform and hence contain complements of finite sets, so these are direct refinements; by construction $(p_1,U'_1)$ lies in the dense action domain $P^\pi$. Finally intersect $\pi U'_1$ with $V'_1$ above their common trunk $\pi p_1=q_1$. F3 makes this a condition $q'\le q_1$; its inverse image $p'=\pi^{-1}q'$ refines $p_1$, and $\pi p'=q'$. [F1, F3, F4]

2.1 Since $H_e$ fixes every name in $\vec\tau$, F2 sends $p'\Vdash_3\varphi(\vec\tau)$ to $\pi p'\Vdash_3\varphi(\vec\tau)$. But $q'\Vdash_3\neg\varphi(\vec\tau)$, and a common refinement of $\pi p'$ and $q'$ would force both alternatives. This contradiction proves the restriction implication. The empty support and identity permutation are allowed, and zero parameters cause no change. [F1, F2, step 1.1]

3.1 Let $\dot x$ be supported by $e$ and suppose $\dot x_G\subseteq\gamma$ for a ground ordinal $\gamma$. By the truth lemma choose $p_0\in G$ with $p_0\Vdash_3\dot x\subseteq\check\gamma$. Define the set $P_e$-name $\dot x_e=\{(\check\alpha,p\restriction e):\alpha<\gamma,\ p\le p_0,\ p\Vdash_3\check\alpha\in\dot x\}$. This is a set because $\gamma$ and the finite-coordinate forcing $P_e$ are sets. Step 2.1 says every displayed restriction forces the same membership. If $\alpha\in(\dot x_e)_{G\restriction e}$, truth gives $\alpha\in\dot x_G$; conversely, if $\alpha\in\dot x_G$, truth below the chosen $p_0\in G$ gives $p\in G$ with $p\le p_0$ forcing membership, and $p\restriction e\in G\restriction e$ places $\alpha$ in $(\dot x_e)_{G\restriction e}$. Thus the two values agree. [F3, F4, step 2.1]

4.1 Every $x\in N_G$ is the value of an HS name, which by definition has some finite support; closing it under $\operatorname{cf}'$ remains finite. F1 bounds the transitive closure of that set name in a regular $P_\theta$ and preserves hereditary symmetry there, giving $x\in N_{G_\theta}$. For a set of ordinals, choose $\gamma>\sup x$ and apply step 3.1 to obtain the sharper finite-restriction name. No converse from mere membership in $M[G\restriction e]$ to symmetry is claimed. [F1, step 3.1] ∎
