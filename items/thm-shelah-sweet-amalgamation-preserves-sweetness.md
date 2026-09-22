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
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

**Given:** Work in ZFC. Let $(Q_\ell,D_\ell,(E^\ell_n)_{n<\omega})$, $\ell=1,2$, be sweetness models, and let $i_\ell:P_0\to BA(Q_\ell)^+$ be named complete embeddings. Identify the two images of $P_0$. A pair $(q_1,q_2)\in Q_1\times Q_2$ is **admitted** when some $p_0\in P_0$ satisfies $p_0\Vdash q_\ell\in Q_\ell/P_0$ for both $\ell=1,2$; write $O=Q_1*_{P_0}Q_2$ for the admitted pairs with the coordinatewise order. This is the source's Definition 7.1, so admission is an intrinsic existential property of the pair, not extra witness data carried by a condition.

[F1] [[def-shelah-sweetness-model]]: both $(Q_\ell,D_\ell,(E^\ell_n))$ satisfy the sequential and transfer clauses with downward directed classes, and the extension relation between sweetness models is the five-clause relation of the Definition.

[F2] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: a sweet forcing itself is a countable union of directed sets and is ccc.

[F3] Shelah, Claim 7.3(1): if $P<BA(Q)$ and $Q$ is sweet, then $P$ is a countable union of directed subsets. Applied to $P_0<BA(Q_1)$, this supplies $(A_j)_{j<\omega}$ with $P_0=\bigcup_jA_j$ and every $A_j$ directed. Definition 7.1 also states the standard amalgam facts: $O$ is forcing-equivalent to $P_0*(Q_1/P_0\times Q_2/P_0)$ and the maps $q_1\mapsto(q_1,1_{Q_2})$ and $q_2\mapsto(1_{Q_1},q_2)$ are complete embeddings. The weak-coordinate symbols are the distinguished weakest conditions from [F1].

[F4] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the two-part uniform conclusion of the corresponding source claim, in the form that for a condition $q\in D_\ell$ and $p_0\Vdash q\in Q_\ell/P_0$ there are $j$ and $k$ such that every $q'\mathrel{E^\ell_k}q$ has some $p_0'\in A_j$ with $p_0'\le p_0$ and $p_0'\Vdash q'\in Q_\ell/P_0$, and the union of those $A_j$ having this property is dense below $p_0$.

[F5] [[def-axiom-of-choice]]: the ambient ZFC assumption permits the witness choices used in Claims 7.3 and 7.4.

[F6] Shelah's Lemma 7.5 proves the sweetness construction from the displayed least modulus, and Claim 7.12 proves the fixed-model extension construction. Both are cited in the source locator above. [source]


## Proof

1.1 Put $$D=\{(q_1,q_2)\in O:q_1\in D_1\text{ and }q_2\in D_2\}.$$ The source amalgamation lemma recorded in [F6] first proves that $D$ is dense. Its proof keeps the admission witness until after both coordinates have been strengthened: below a witness $p_0$, apply the dense conclusion of [F4] to the first coordinate; reindex the resulting subfamily of the directed cover $(A_j)$, whose union remains dense below $p_0$; then apply [F4] to the second coordinate. Directedness inside one $A_j$ produces a common strengthening of the two quotient witnesses. Thus the result is still an admitted pair, rather than merely two independently dense coordinates. [F3, F4, F5, F6]

1.2 The same two applications prove the intrinsic assertion

$$ (*)_x\qquad \exists m<\omega\ \forall q'_1\mathrel{E^1_m}q_1\ \forall q'_2\mathrel{E^2_m}q_2\quad (q'_1,q'_2)\in O $$

for every $x=(q_1,q_2)\in D$. Define $m(x)$ to be the least such $m$. No chosen witness, index $j$, or reduction is part of $m(x)$. If $q'_\ell\mathrel{E^\ell_{m(x)}}q_\ell$ for both coordinates and $x'=(q'_1,q'_2)\in D$, then the $E^\ell_{m(x)}$-classes of the old and new coordinates coincide, so $(*)_{x'}$ holds at $m(x)$. Conversely, if it held at some $r<m(x)$ for $x'$, refinement gives $q'_\ell\mathrel{E^\ell_r}q_\ell$, hence the two $E^\ell_r$-classes coincide and it would hold for $x$, contradicting minimality. Therefore

$$ (**)_x\qquad m(x')=m(x). $$

This is exactly the least-modulus convention and the displayed observation in the source amalgamation lemma [F6]. [F1, F3, F4, F5, F6]

2.1 On $D$ define $$x\mathrel{E_n}x'\quad\Longleftrightarrow\quad m(x)=m(x')=:m\ \text{ and } q_\ell\mathrel{E^\ell_{m+n}}q'_\ell\quad(\ell=1,2).$$ The relation is intrinsic because $m$ is intrinsic. The observation $(**)$ gives reflexivity and makes the common-$m$ condition stable under the coordinate equivalences; symmetry and transitivity then follow from the old relations. Refinement is immediate. An $E_n$-class is encoded by $m$ and one $E^1_{m+n}$-class and one $E^2_{m+n}$-class, so there are countably many classes. [F1, step 1.2]

3.1 The remaining sweetness checks are those of the source amalgamation lemma [F6] with precisely this definition. For directedness, take coordinatewise common lower bounds inside the two $E^\ell_{m+n}$-classes; since they still lie in the corresponding $E^\ell_m$-classes, $(*)_x$ admits the resulting pair, and $(**)_x$ keeps its modulus equal to $m$. For a diagonal sequence, apply the sequential clause in each coordinate; the tail bounds lie in the required $E^\ell_{m+n}$-classes, so the same $(*),(**)$ argument makes them admitted $E_n$-bounds. For transfer, use the two coordinate transfer moduli and then the common-admission conclusion obtained in step 1.1 from [F4]; $(**)$ again keeps the output in the prescribed amalgam class. These checks prove the directed, sequential and transfer clauses without selecting a witness as part of a condition. Thus $(O,D,(E_n))$ is a sweetness model. [F1, F4, F6, step 1.1, step 1.2, step 2.1]

4.1 By the standard amalgam facts recorded in [F3], the weak-coordinate maps $q_1\mapsto(q_1,1_{Q_2})$ and $q_2\mapsto(1_{Q_1},q_2)$ are complete embeddings into $O$. This conclusion is about the canonical copies in the full amalgam; it does not require those copies to lie in the particular dense presentation $D$. Sweetness also implies ccc by [F2]. [F2, F3, step 3.1]

4.2 Now suppose $(Q_1,D_1,(E^1_n))<(Q_2,D_2,(E^2_n))$ in the exact five-clause sense of [F1]. The fixed-model source result [F6] applies to the same named embeddings and the preceding amalgam. It first replaces the initial dense presentation by an equivalent dense-open presentation $D^*$ separated from the canonical old dense set, then sets $D'=D^*\cup D_1$. On $D^*$ it uses the new relations and on $D_1$ it uses exactly the old $E^1_n$; there are no cross-piece classes. The mixed case of the transfer clause is checked by the comparable transfer form in [F1], as in the source's preceding fixed-model argument. The source result then verifies: the canonical $Q_1$ is a complete suborder, $D_1\subseteq D'$, the old relations are the restrictions, every new class meeting $D_1$ remains in $Q_1$, and if an old condition strengthens a member of $D'$, that member already lies in $D_1$. Hence this is a sweetness model on $O$ extending the fixed model on $Q_1$. [F1, F6, step 3.1]

5.1 Steps 3.1--4.2 prove every assertion in the Statement, including the named canonical-copy and fixed-model interfaces. [step 3.1, step 4.1, step 4.2] ∎
