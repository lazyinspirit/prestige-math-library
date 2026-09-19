---
id: thm-shelah-sweet-amalgamation-preserves-sweetness
kind: theorem
title: Shelah amalgamation preserves sweetness
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, lem-shelah-sweet-forcings-are-sigma-directed-ccc, lem-shelah-sweet-density-transfer-along-complete-suborders, thm-forcing-equivalence-and-boolean-completion, def-two-step-forcing-iteration, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Lemma 7.5 and Claim 7.12, pp. 35-36 and 41-42"}
---

## Statement

Let $Q_1$ and $Q_2$ be sweet forcings and let $P_0$ be completely embedded in
$BA(Q_1)$ and in $BA(Q_2)$. Their Boolean amalgam $Q_1*_{P_0}Q_2$ is sweet and
contains complete canonical copies of $Q_1$ and $Q_2$. If the sweetness model
on $Q_2$ extends a fixed model on $Q_1$ in the sense of the extension clauses,
the amalgam can be equipped with a sweetness model extending that fixed model.
The formulation also permits two named complete embeddings of $P_0$, by
identifying their images before taking the amalgam.

## Facts & Assumptions

**Given:** Work in ZFC. Let $(Q_\ell,D_\ell,(E^\ell_n)_{n<\omega})$, $\ell=1,2$, be sweetness models, and let a forcing preorder $P_0$ be completely embedded in $BA(Q_1)$ and in $BA(Q_2)$, with the two images of $P_0$ identified. A pair $(q_1,q_2)\in Q_1\times Q_2$ is **admitted** when some $p_0\in P_0$ satisfies $p_0\Vdash q_1\in Q_1/P_0$ and $p_0\Vdash q_2\in Q_2/P_0$; $O=Q_1*_{P_0}Q_2$ is the set of admitted pairs, ordered coordinatewise.

[F1] [[def-shelah-sweetness-model]]: both $(Q_\ell,D_\ell,(E^\ell_n))$ satisfy the sequential and transfer clauses with downward directed classes, and the extension relation between sweetness models is the five-clause relation of the Definition.

[F2] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: a sweet forcing itself is a countable union of directed sets and is ccc.

[F3] Shelah, Claim 7.3(1): if $P<BA(Q)$ and $Q$ is sweet, then $P$ is a countable union of directed subsets. Applied to $P_0<BA(Q_1)$, this supplies a sequence $(A_j)_{j<\omega}$ of directed subsets whose union is $P_0$. The source proves this from the $E^1_0$-classes and completeness of the suborder; this is stronger than [F2], which concerns the sweet forcing itself.

[F4] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the two-part uniform conclusion of the corresponding source claim, in the form that for a condition $q\in D_\ell$ and $p_0\Vdash q\in Q_\ell/P_0$ there are $j$ and $k$ such that every $q'\mathrel{E^\ell_k}q$ has some $p_0'\in A_j$ with $p_0'\le p_0$ and $p_0'\Vdash q'\in Q_\ell/P_0$, and the union of those $A_j$ having this property is dense below $p_0$.

[F5] [[def-axiom-of-choice]]: the ambient ZFC assumption permits the witness choices used in Claims 7.3 and 7.4.


## Proof

1.1 Let $D=\{(q_1,q_2)\in O:q_\ell\in D_\ell\text{ for }\ell=1,2\}$: this set is dense in $O$, because for an admitted pair with witness $p_0$ one may apply [F4] below $p_0$ in each coordinate to reach the dense sets $D_\ell$. [F1, F4]

2.1 For every $(q_1,q_2)\in D$ there are $j<\omega$ and a common witness $p_0$ together with a modulus $m$ such that every pair $(q_1',q_2')$ with $q_\ell'\mathrel{E^\ell_m}q_\ell$ for $\ell=1,2$ is admitted by some $p_0'\in A_j$ with $p_0'\le p_0$: apply [F4] to $q_1$ in $Q_1$ to obtain $S=\{j:A_j$ has the uniform property for $q_1$ at some $k_1\}$, then reindex the subfamily $(A_j)_{j\in S}$, whose union is dense below $p_0$, and apply [F4] to $q_2$ in $Q_2$. The resulting index $j$ and the maximum $m$ of the two moduli work, because directedness of $A_j$ gives a common strengthening of the two coordinate witnesses. [F3, F4, step 1.1]

3.1 Define $m(q_1,q_2)$ to be the least $m$ for which step 2.1 holds for some $j$, and fix for the rest of the proof one such $j(q_1,q_2)$ and witness $p_0(q_1,q_2)$. These simultaneous choices are made in the ambient ZFC theory fixed above. [F5, step 2.1]

4.1 Stability of the modulus: if $m=m(q_1,q_2)$ and $q_\ell'\mathrel{E^\ell_m}q_\ell$ for $\ell=1,2$, then $m(q_1',q_2')=m$. For $\le$, the same index $j$ and modulus $m$ satisfy the defining property of step 2.1 for the new pair, because $E^\ell_m$-equivalence is transitive; for $\ge$, a smaller modulus $m'<m$ working for $(q_1',q_2')$ also works for $(q_1,q_2)$, since $E^\ell_{m'}$ is coarser than $E^\ell_m$ and hence any pair $E^\ell_{m'}$-equivalent to the coordinates of $(q_1,q_2)$ is $E^\ell_{m'}$-equivalent to those of $(q_1',q_2')$, contradicting minimality of $m$. [step 3.1]

5.1 Define $(q_1,q_2)\mathrel{E_n}(q_1',q_2')$ on $D$ by: $m(q_1,q_2)=m(q_1',q_2')=m$ and $q_\ell\mathrel{E^\ell_{m+n}}q_\ell'$ for $\ell=1,2$. Each $E_n$ is an equivalence relation: reflexivity and symmetry are immediate, and transitivity follows from step 4.1, which forces the moduli of the three involved pairs to agree, together with transitivity of the two old relations. [step 4.1]

5.2 The sequential clause holds: let $(q_1^i,q_2^i)\mathrel{E_i}(q_1^\omega,q_2^\omega)$ for $i\le\omega$ and fix $n$. All pairs share one modulus $m$, and $q_\ell^i\mathrel{E^\ell_{m+i}}q_\ell^\omega$; applying the old sequential clause in each coordinate to the tails and then using directedness of the $E^\ell_{m+n}$-classes to absorb the finitely many earlier indices produces $q_\ell^*\mathrel{E^\ell_{m+n}}q_\ell^\omega$ below every $q_\ell^i$ with $i\ge n$; the pair $(q_1^*,q_2^*)$ is admitted by the witness of $(q_1^\omega,q_2^\omega)$ and has modulus $m$ by step 4.1, so it is the required common lower bound in the $E_n$-class of $(q_1^\omega,q_2^\omega)$. [F1, step 4.1]

5.3 The transfer clause holds: fix $(p_1,p_2),(r_1,r_2)\in D$ and $n$, with moduli $m_p,m_r$. By [F1] choose in each coordinate a modulus $K_\ell$ for the pair $(p_\ell,r_\ell)$ at level $n+m_r$, and put $k=\max(m_p,K_1,K_2)$. Suppose $(r_1',r_2')\mathrel{E_n}(r_1,r_2)$ satisfies $r_\ell'\le p_\ell$ for $\ell=1,2$. Given any $(p_1',p_2')\mathrel{E_k}(p_1,p_2)$, step 4.1 gives $m(p_1',p_2')=m_p$, so $p_\ell'\mathrel{E^\ell_{K_\ell}}p_\ell$, and the old transfer clause at level $n+m_r$ supplies $r_\ell''\mathrel{E^\ell_{m_r+n}}r_\ell$ with $r_\ell''\le p_\ell'$. Step 2.1 gives $m(r_1'',r_2'')=m_r$, so $(r_1'',r_2'')\mathrel{E_n}(r_1,r_2)$; and $(r_1'',r_2'')$ is admitted, because the uniform family attached to $(r_1,r_2)$ in step 2.1 admits every pair whose coordinates are $E^\ell_{m_r}$-equivalent to $r_\ell$, and it admits them by a common $p_0'$ that is compatible with each $r_\ell''$ through $r_\ell''\le p_\ell'$. [F1, step 2.1, step 4.1]

6.1 $E_{n+1}$ refines $E_n$, and $E_n$ has countably many classes: the first is immediate from $E^\ell_{m+n+1}$ refining $E^\ell_{m+n}$. For the second, the $E_n$-class of $(q_1,q_2)$ is determined by the pair of old classes $q_1/E^1_{m+n}$, $q_2/E^2_{m+n}$ together with $m=m(q_1,q_2)$, so the set of $E_n$-classes injects into the countable union over $m<\omega$ of the countable products of the class sets of $E^1_{m+n}$ and $E^2_{m+n}$. [F1, step 5.1]

6.2 The $E_n$-classes are downward directed: given $(q_1,q_2)\mathrel{E_n}(q_1',q_2')$ with common modulus $m$, use downward directedness of the $E^\ell_{m+n}$-classes to pick $q_\ell^*\mathrel{E^\ell_{m+n}}q_\ell$ with $q_\ell^*\le q_\ell,q_\ell'$ for $\ell=1,2$. Since $E^\ell_{m+n}$ refines $E^\ell_m$, the uniform property in step 2.1 supplies one $P_0$-condition admitting the pair $(q_1^*,q_2^*)$. Step 4.1 gives $m(q_1^*,q_2^*)=m$, so $(q_1^*,q_2^*)\mathrel{E_n}(q_1,q_2)$ is a common lower bound in the class. [F1, step 2.1, step 4.1, step 5.1]

7.1 The canonical copies are complete: the maps $q_1\mapsto(q_1,1_{Q_2})$ and $q_2\mapsto(1_{Q_1},q_2)$ embed $Q_1$ and $Q_2$ order-fully into $O$, and they land in the dense set $D$ in the sense of step 1.1 after strengthening the first coordinate; a maximal antichain $A$ of $Q_1$ is predense in $O$ because an admitted pair $(p_1,p_2)$ with witness $p_0$ is compatible with some $(a,1_{Q_2})$, $a\in A$, below it: strengthen $p_1$ inside $A$ and use that $p_0$ remains compatible with the strengthening. Hence the amalgam contains complete canonical copies of both forcings. The relations constructed in steps 5.1 through 6.2 make it sweet, and [F2] then makes it ccc. [F2, F4, step 1.1, step 5.3, step 6.2]

8.1 Suppose now that the sweetness model on $Q_2$ extends the fixed model on $Q_1$. Claim 7.12 of the cited source applies to exactly these models and embeddings. Starting with the Lemma 7.5 model constructed above, it first replaces its dense set by a dense-open set disjoint from the canonical copy of $D_1$, then adjoins that copy and takes on the two disjoint pieces respectively the new relations and the original $E^1_n$. The proof of Claim 7.12 checks the only additional mixed transfer clause and the five extension clauses, yielding a sweetness model on $O$ extending the fixed model on $Q_1$. [F1, step 7.1]

9.1 Steps 4.1 through 8.1 verify all clauses of the Statement: the amalgam is sweet, its canonical copies are complete, and in the extension case the amalgam carries a sweetness model extending the fixed model on $Q_1$. [step 7.1, step 8.1] ∎
