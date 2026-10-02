# Branching handoff: proof and source audit

This is read-only research input for the batch 14 author/root reconciliation. It is not an item decision, acceptance, scope receipt, or replacement for the ordinary audit of the current generated items. The failed author attempt had stopped after writing 22 of the 25 original items; the three then-missing IDs were thm-complex-specht-induction-branching-rule, ex-young-graph-through-s4, and ex-schur-weyl-for-c2-tensor-three. The engine author has since been restarted, so those are historical checkpoint facts, not a statement about current disk contents. Re-read and independently audit the current outputs before recording any decision.

The source PDFs below were downloaded in full and inspected at the cited passages. The SHA-256 values identify the exact local source bytes under /tmp/frontier-37-batch14-source-audit/ and can be matched against the batch 14 coverage source prefixes.

| Local source | Identification and inspected locator | SHA-256 |
|---|---|---|
| wildon.pdf | Mark Wildon, *Representation Theory of the Symmetric Group*, §§6.1–6.3, especially Theorem 6.8 and Lemma 6.10, PDF/printed pp. 27–31. | 31e3817f5bd1f4d0b661aa9e64a2401401c171d991ee3553f0f71f334574112e |
| snowden.pdf | Andrew Snowden lectures, Aleksander Horawa notes, *Math 711: Representation Theory of Symmetric Groups* (2017), Lemmas 2.45–2.46, PDF pp. 23–24; Theorem 3.23 and Lemmas 3.26, 3.28–3.29, PDF pp. 37–39. | 601448219a201de84d29c8f6c550a70a4938caf67141a7f1fa054f92c7e7b30d |
| chan.pdf | Charlotte Chan, *Representation Theory of Symmetric Groups* (2011), Theorem 4.16, PDF p. 19, and Theorem 6.8, PDF p. 27. | 8a3cac907770c66d1c8e32e83f3690f89eb3da2d359f6f6a5e747dcf9758a6f6 |
| etgingof.pdf | Pavel Etingof et al., *Introduction to Representation Theory*, Chapter 4, §4.18, Theorems 4.54–4.57, Lemma 4.56, Proposition 4.58 and Corollary 4.59, PDF pp. 18–19. | 116dea942178e72db4346039ae7d806dd0661f608be7bf4480d8976f290eb616 |
| lin.pdf | Jian Qiu Lin, *Modern Algebra I: A First Course in Representation Theory*, version 2025-01-14, §27.3–27.5, Theorems 27.4, 27.8–27.9 and Proposition 27.5, printed/PDF pp. 72–74. | 63fdddc3d5a17e0d228f1faf92598203c5a12022c923e3aa9e1920d952caa494 |
| craven.pdf | David A. Craven, *Groups, Geometries and Representation Theory* (2013), §§2.2 and 2.4 (branching rule and Young's rule). | b2b190e9a1928b17d7747985e260cf3e7986d1ba31e906d7918c946ee7c0a8c8 |

## Garnir straightening and field-uniform Specht bases

The direct route is Wildon §§6.1–6.3. It supplies the needed argument over the integers first, then over every field; it does not divide by a factorial in the coefficient field.

For adjacent columns $i,i+1$, choose subsets $X,Y$ of their entries with $|X|+|Y|>\lambda'_i$, where $\lambda'_i$ is the height of column $i$. Let $G_{X,Y}$ be a signed coset-transversal sum for $S_X\times S_Y\subset S_{X\cup Y}$, with cosets and action convention as in Wildon's Definition 6.6. The full alternating sum on $S_{X\cup Y}$ factors as the product of the column alternators on $X,Y$ and $G_{X,Y}$. Acting on a polytabloid, the first two alternators contribute $|X|!|Y|!$. For every column-permutation term of the polytabloid, the pigeonhole principle gives entries $x\in X,y\in Y$ in the same row after the permutation, since the two sets together have more entries than that column's height. The transposition $(xy)$ fixes that tabloid and reverses the sign in the full alternator, so the full alternator kills the tabloid term. Thus $|X|!|Y|!$ times the Garnir relation is zero in the free abelian tabloid module. That module is torsion-free, so the integer factor can be cancelled there. The resulting exact integral relation then reduces to any field, including characteristic two.

For straightening, start with a column-standard tableau that is not row-standard and use the adjacent-column Garnir relation from Theorem 6.8. In each nonidentity coset term, at least one entry moves from the left selected set $X$ into the right selected set $Y$. The greatest moved entry is the largest label whose column changes; after sorting each column, that label is in a strictly more-right column. Lemma 6.10 orders column-standard tableaux by this finite order, so induction terminates and expresses each polytabloid as an integral linear combination of standard polytabloids. The coefficients are integral (the selected transversal terms carry signs).

For independence over a field, Wildon Proposition 6.5 uses the total order on tabloids in §6.1. In a standard polytabloid, the identity tabloid has coefficient $+1$, while every other column-permutation tabloid is strictly lower. Taking the greatest leading tabloid in a proposed finite dependence contradicts its coefficient $+1\ne0$ in every field. Together, the two arguments establish a standard-polytabloid basis uniformly over all fields. This also supports the integral basis/straightening carrier claims; no characteristic-specific cancellation should be introduced after reduction.

## Restriction and induction branching

Snowden Lemmas 2.45–2.46 filter $S^\lambda\downarrow_{S_{n-1}}$ by the row containing $n$. Each quotient is $S^{\lambda\setminus b}$, once for each removable box $b$. The standard basis identifies the quotient vector spaces, and the Garnir relations show that the identification is equivariant modulo the preceding filtration. Snowden explicitly sketches the equivariance check; Wildon's integral Garnir relation above is the concrete relation needed to fill that step. Chan Theorem 4.16 independently states the restriction filtration over any field. In characteristic zero, Maschke semisimplicity splits it, so restriction is the direct sum over removable boxes.

Then Frobenius reciprocity gives, for every $\nu$ of size $n+1$,
\[
\dim\operatorname{Hom}_{S_{n+1}}(\operatorname{Ind}_{S_n}^{S_{n+1}}S^\lambda,S^\nu)
=\dim\operatorname{Hom}_{S_n}(S^\lambda,\operatorname{Res}_{S_n}^{S_{n+1}}S^\nu).
\]
By the restriction rule and Schur's lemma this is one exactly when $\nu$ is obtained by adding one box to $\lambda$, and zero otherwise. Completeness and semisimplicity of the ordinary Specht modules give the induction direct sum, with each addable-box constituent once. This proves the induction theorem from the restriction theorem instead of treating an induction citation as an unexplained step. The $n=0$ case is the trivial $S_0\to S_1$ instance.

## Young's rule and semistandard Hom basis

Use Snowden Theorem 3.23 and Lemmas 3.26, 3.28–3.29. For the permutation module
$M^\mu=\operatorname{Ind}_{S_{\mu_1}\times\cdots}^{S_n}\mathbf1$,
the maps $\widehat\theta_T$, indexed by semistandard tableaux $T$ of shape $\lambda$ and content $\mu$, form a basis of $\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$. Independence is triangular on column-equivalence classes (Lemma 3.26). For spanning, write a nonzero map on a fixed polytabloid. The Garnir relation implies a maximal nonzero support tableau can be chosen semistandard (Lemma 3.28); subtract its corresponding $\widehat\theta_T$ and repeat with strictly lower support (Lemma 3.29). The finite order makes this terminate. Maschke's theorem and the characteristic-zero classification of Specht modules then identify these Hom dimensions with the multiplicities in $M^\mu$, giving Young's rule with coefficient $K_{\lambda\mu}$.

**Audit correction: support order.** In the audited span proof, step 3.1 chose only a componentwise-maximal support $\mathbb N$-vector, while step 8.1 treated every other support vector as componentwise below it. Incomparable vectors make that inference invalid. Step 9.1 later selects a maximum in a total order, but that does not repair the earlier use. Select a greatest support vector in the same fixed total order at the initial selection and use that order consistently in each subtraction. If the argument instead depends on a partial order, it must first prove that all support vectors in question are comparable. The source proof's maximality is with respect to its specified total order on column-equivalence classes; do not weaken that to componentwise maximality.

Snowden Remark 3.27 mentions an alternative dimension/RSK argument but does not present it. The local span proof should stand on Lemmas 3.28–3.29 rather than citing the remark as if it supplied the missing spanning proof or using a dimension identity whose derivation depends on the same theorem.

## Schur–Weyl route and qualification on zero factors

For $V$ finite dimensional over $\mathbb C$, Etingof et al. §4.18 provides the centralizer route. The image of $\mathbb C[S_n]$ is semisimple by Maschke. The commutant in $\operatorname{End}(V^{\otimes n})$ identifies with the symmetric tensors in $(\operatorname{End}V)^{\otimes n}$. Polarization spans $\operatorname{Sym}^n(\operatorname{End}V)$ by pure powers, and Newton identities express each pure power $a^{\otimes n}$ as a polynomial in the place-sum operators $\Delta(a),\Delta(a^2),\ldots,\Delta(a^n)$. This proves the commutant is the image of $U(\mathfrak{gl}(V))$, not just that the place-sum operators commute with $S_n$. The double-centralizer theorem (Etingof Theorem 4.54) then gives mutual centralizers and the multiplicity-space decomposition. Etingof Theorems 4.57–4.59 state the factors $L_\lambda$ are irreducible or zero and pairwise distinct among the nonzero factors. Lin Theorems 27.4–27.9 provide a second centralizer/decomposition route and identify the nonzero factors with partitions of length at most $d=\dim V$.

The length cutoff should be proved on both sides. If $\ell(\lambda)>d$, the first-column antisymmetrizer on $d+1$ places vanishes on $V^{\otimes n}$, while it acts nontrivially on the Specht factor (the first-column entries transform by sign); hence the multiplicity space vanishes. If $\ell(\lambda)\le d$, fill row $i$ with $e_i$, apply the column antisymmetrizers, then the row symmetrizers. Each column contains distinct $e_1,\ldots,e_{\lambda'_j}$. In the resulting Young-symmetrized tensor, the row-filled word appears with coefficient $\prod_i\lambda_i!$: only the identity column-permutation term can produce it after row permutations. Thus the tensor is nonzero and the factor occurs. Its weight is $\lambda$. Every raising matrix unit kills it because it creates a repeated basis vector in a column alternation. By the double-centralizer theorem the multiplicity space is irreducible, so this nonzero highest-weight vector identifies its highest-weight label as $\lambda$. The centralizer theorem alone supplies irreducibility, not that label.

**Audit correction: zero multiplicities.** A claim that all distinct $\lambda,\mu$ give nonisomorphic multiplicity spaces is false if both have more than $d$ rows: both spaces are zero and hence isomorphic. State pairwise inequivalence only for $\lambda,\mu$ with $\ell(\lambda),\ell(\mu)\le d$ (the nonzero factors). A zero factor and a nonzero factor are automatically nonisomorphic. This qualification also matches the source wording “distinct irreducible representations ... or zero” and Lin's restriction to $\Gamma_{d,n}$.

## Missing example derivations from the failed-author checkpoint

These derivations are short checks for the three historically missing IDs; recheck their statements against the restarted author's current files.

* **Young graph through $S_4$**: levels are $\varnothing$; $(1)$; $(2),(1,1)$; $(3),(2,1),(1,1,1)$; and $(4),(3,1),(2,2),(2,1,1),(1,1,1,1)$. Connect diagrams by one addable box. The standard-tableau/path counts at level four are $1,3,2,3,1$, respectively. The $S_4\downarrow S_3$ dimension checks are $1$, $1+2=3$, $2$, $2+1=3$, $1$. The induction checks from $S_3$ are $1+3=4=4\cdot1$ from $(3)$, $3+2+3=8=4\cdot2$ from $(2,1)$, and $3+1=4=4\cdot1$ from $(1,1,1)$.
* **$\mathbb C^2$ tensor cube**: the length cutoff leaves $(3)$ and $(2,1)$, with Specht dimensions 1 and 2. The $(3)$ multiplicity is $(V^{\otimes3})^{S_3}\cong\operatorname{Sym}^3(V)$, of dimension 4 with basis $x^3,x^2y,xy^2,y^3$. Since $\dim V^{\otimes3}=8$, the remaining $(2,1)$ multiplicity has dimension 2. The local highest-weight result identifies it as weight $(2,1)$. Do not state $\det(V)\otimes V$ unless that is proved in the item.
* **Induction branching theorem**: the Frobenius-reciprocity computation above gives one copy for every addable box and no others. It handles the empty partition through the trivial $S_0\to S_1$ case.

## Snapshot findings and remaining uncertainty

The following hashes identify the item text that was inspected during the failed-author checkpoint; they are not hashes of the restarted author's output and must not be used as current acceptance evidence:

| Earlier inspected item | SHA-256 |
|---|---|
| lem-integral-specht-garnir-straightening-and-field-basis.md | b90c598c9fad3b4de6c47bf5760cb32249525b3157a65775608e919a84cc463f |
| lem-specht-branching-subspaces-are-invariant.md | 5ebd75d659a7d0eb9b1ef93203ac82bb67b626dbe8159cbae9214e00a57c9265 |
| lem-semistandard-homomorphisms-span-in-characteristic-zero.md | 6e70694001166accac429f4957c309f7874a2620526e883b447817d76df6bf4b |
| lem-semistandard-homomorphisms-are-independent-and-dominance-triangular.md | ef96f57695b63e1d95d418ac9f6b84b070c314b922463671271c01625b366af2 |
| thm-youngs-rule-for-permutation-modules.md | 39f481da3248cb51da9416d489b716204a004836bce4344138294da60e83bc97 |
| lem-tensor-place-operators-span-the-symmetric-centralizer.md | c129b49291b26e6c8f7ab56e8fb71a839d79bbad917a2a0b82c24b823fb841b0 |
| thm-schur-weyl-double-centralizer.md | 7ca8957c36900bf23ed8e1833618109a2b5d9a4d31daa876e3a8e98a62fbeec6 |
| lem-schur-weyl-length-cutoff-by-column-antisymmetrization.md | 20c6e21f49408a940f5612206e10783ce7a5524eda6a3dfa221d8ce55bfe55f0 |
| lem-schur-weyl-polytabloid-highest-weight.md | a55d05412866d04693c3bbf85e0061d4f8be11f5592fd9c2bd8853aecfccd6a8 |
| thm-schur-weyl-decomposition-with-length-cutoff.md | a83f35dcf79c50de14ab72595cbeb5c59aa979da35cd59c847308157b8e0c1fa |

At the cited source passages I found no unresolved source-text uncertainty. The two proof defects above were local proof/order or statement-qualification defects, not gaps in source retrieval. The restarted author output has not been audited in this report; ordinary item-by-item decisions still require fresh evidence against its current hashes.
