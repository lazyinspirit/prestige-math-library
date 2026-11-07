---
dependency_level: 5
id: lem-finite-field-extension-p-primary-reduction-and-tensor-branches
kind: lemma
title: Artinian tensor branches and finite prime-primary field reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-presented-simple-extension-milnor-transfer
- thm-finite-normal-closures-exist-and-are-finite
- lem-normal-extension-separable-over-maximal-purely-inseparable-subextension
- thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
- thm-sylow-first-theorem
- thm-fundamental-theorem-of-finite-galois-theory
- lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local
justified_by: []
proof_strategy: direct
axiom_use: AC finite Artinian tensor branch lengths and coefficient extension of a
  chosen tower; finite coprime p-reduction to fields admitting normal-p chains; no
  canonical independence assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter IX §§2–3;
      explicit finite reduction and local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Assume AC. Let $E/F$ be finite and let $\boldsymbol\alpha$ be any finite simple-generator tower with composite presented Milnor map $T_{\boldsymbol\alpha}$. For every field extension $D/F$, write the finite Artinian algebra
$$E\otimes_FD=\prod_b B_b,\qquad E_b=B_b/\mathfrak m_b,\qquad m_b=\operatorname{length}_{B_b}(B_b).$$
Then coefficient extension of $T_{\boldsymbol\alpha}$ is the sum over these factors of $m_b$ times the composite presented transfer along the residue-field tower induced by $\boldsymbol\alpha$, followed by restriction from $E$ to $E_b$. This description retains nilpotents and makes no assertion that these branch composites are independent of the chosen tower. For each prime $p$ there is a finite $D/F$ of degree prime to $p$ such that every $E_b/D$ admits a chain of normal degree-$p$ extensions (allowing an empty chain). Moreover, if $M/F$ is a finite normal extension containing all conjugates of $E$, restriction to $M$ of every $T_{\boldsymbol\alpha}$ is the sum of the $F$-embeddings $E\to M$, each with the inseparable degree of $E/F$ as multiplicity.

## Statement references

[[def-axiom-of-choice]]

[[lem-presented-simple-extension-milnor-transfer]]

[[thm-finite-normal-closures-exist-and-are-finite]]

[[lem-normal-extension-separable-over-maximal-purely-inseparable-subextension]]

[[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]

[[thm-sylow-first-theorem]]

[[thm-fundamental-theorem-of-finite-galois-theory]]

[[lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local]]

## Facts & Assumptions

**Given:** The objects and assumptions in the Statement.

[F1] A presented simple transfer satisfies coefficient extension with each irreducible-factor exponent, projection, degree, and the determinant $K_1$ norm. [[lem-presented-simple-extension-milnor-transfer]]

[F2] A finite extension has a finite normal closure, obtained by adjoining the roots of finitely many minimal polynomials. [[thm-finite-normal-closures-exist-and-are-finite]]

[F3] For finite normal $M/F$, the fixed field $F_0=M^{\operatorname{Aut}(M/F)}$ is purely inseparable over $F$ and $M/F_0$ is Galois. [[lem-normal-extension-separable-over-maximal-purely-inseparable-subextension]]

[F4] An algebraic extension is purely inseparable over its maximal separable subfield. [[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]

[F5] Finite groups have Sylow subgroups, and the finite Galois correspondence gives their fixed-field degrees. [[thm-sylow-first-theorem]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F6] A proper subgroup of a finite $p$-group is strictly contained in its normalizer. [[lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local]]

[A1] Full AC is assumed; only finite constructions are needed after choosing field presentations. [[def-axiom-of-choice]]

## Proof

**Given:** The data above.

1.1 A finite-dimensional commutative $D$-algebra $R$ has finitely many maximal ideals: any $r$ distinct ones give a quotient onto the product of $r$ nonzero residue fields by the finite Chinese remainder theorem, so $r\le\dim_D R$. Put $J$ equal to their intersection. The descending sequence $J^a$ stabilizes by finite dimension. If $V=J^a=JV$, choose finitely many generators of $V$ and express them as a matrix with entries in $J$ times that same list. The adjugate identity kills $V$ by a determinant congruent to $1$ modulo $J$. That determinant is outside every maximal ideal, hence is a unit, so $V=0$. Thus $J$ is nilpotent. The maximal-ideal powers are pairwise comaximal, and for a sufficiently large $a$, their product $J^a=0$; Chinese remainders give $R=\prod_bR/\mathfrak m_b^a$. Each factor is local, with nilpotent maximal ideal and a finite residue extension of $D$. A composition series of its finite-dimensional ideals has all simple quotients its residue field: a nonzero simple module is generated by any nonzero element and hence is $R/\mathfrak m$. Consequently its dimension over $D$ is its length times its residue degree. This proves the displayed decomposition and the meaning of $m_b$ without assuming reducedness or a coefficient field in $B_b$. [A1, given, construct, algebra]

2.1 Write $E=F_s$ with $F_i=F_{i-1}(\alpha_i)$. At a local factor $C$ of $F_{i-1}\otimes_FD$ of length $m$ and residue field $D_i$, adjoining $\alpha_i$ gives $C[T]/(P_i)$, finite free over $C$. Modulo its maximal ideal, factor $P_i=\prod_Q Q^{h_Q}$ in $D_i[T]$. Its local factors have residues $D_i[T]/Q$. A composition series of $C$, tensoring with this free algebra and then projecting to a local factor over $Q$, is still exact; the projection is a direct summand and thus flat. Each of the $m$ quotients becomes $D_i[T]/Q^{h_Q}$ at that factor. Its filtration by powers of $Q$ has $h_Q$ copies of $D_i[T]/Q$. Thus the new factor length is exactly $m h_Q$. Each final maximal ideal has a unique contraction at every earlier stage, so its branch is unique, and the product of the exponents along that branch is its final length $m_b$. Apply [F1] at each step of coefficient extension: its sums over $Q$ and coefficients $h_Q$ compose into precisely the sum in the Statement with coefficients $m_b$. All algebras, filtrations and sums are finite. In particular nilpotent lengths are retained rather than counted as distinct field embeddings. [F1, step 1.1, construct, algebra]

2.2 Choose a finite normal $M/F$ containing all conjugates of $E$ using [F2]; concretely one may start with $E$ and adjoin all roots of the finitely many generator minimal polynomials, so no unsupported normal-closure infinitude is involved. Let $S$ be the maximal separable subfield of $M/F$. It is normal over $F$, because the minimal polynomial of a separable element splits over $M$ and its roots are still separable, hence in $S$. Thus $S/F$ is Galois and $M/S$ is purely inseparable by [F4]. If $\operatorname{char}(F)=p$, choose a Sylow $p$-subgroup $P$ of $\operatorname{Gal}(S/F)$ and put $D=S^P$. By [F5], $[D:F]$ is prime to $p$ and $S/D$ is Galois with $p$-group. Every residue field $E_b$ embeds over $D$ into $M$: the induced embedding of $E$ is a conjugate inside the normal field $M$, and its compositum with $D$ is that residue field. The maximal separable subfield of $E_b/D$ is $E_b\cap S$, since $D/F$ is separable; the extension above it is purely inseparable of $p$-power degree. [F2, F4, F5, step 1.1, construct, algebra]

3.1 If $\operatorname{char}(F)\ne p$, put $F_0=M^{\operatorname{Aut}(M/F)}$ as in [F3], choose a Sylow $p$-subgroup $P$ of $\operatorname{Gal}(M/F_0)$, and put $D=M^P$. Now $[D:F]=[\operatorname{Gal}(M/F_0):P][F_0:F]$ is prime to $p$: in characteristic zero $F_0=F$, and in characteristic $q>0$ the second degree is a power of $q\ne p$, by adjoining the finitely many required $q$-power roots one at a time. Moreover $M/D$ is Galois with $p$-group. Again every $E_b$ embeds in $M$ over $D$. This case includes primes which divide only the separable part of the original degree and fields with imperfect residue-independent coefficients. [F3, F5, step 1.1, step 2.2, construct, algebra]

4.1 Every intermediate field of a finite Galois $p$-extension has a tower of normal degree-$p$ extensions from the base. Indeed, for its subgroup $H$ inside the Galois $p$-group, [F6] gives $H<N_P(H)$ whenever $H<P$. The nontrivial $p$-group $N_P(H)/H$ has an element of order $p$ (raise any nonidentity element of order $p^r$ to $p^{r-1}$). Its inverse image gives $H\trianglelefteq H_1$ of index $p$; iterate until $P$. Fixed fields, in reverse order, give the claimed normal tower: conjugation by $H_1$ preserves $H$, and its restrictions give all $p$ automorphisms of the corresponding degree-$p$ field extension. For the characteristic-$p$ case of step 2.2 apply this to $E_b\cap S$, and then append a pure-inseparable tower to $E_b$. Such a tower is obtained from finitely many generators by adjoining successive $p$th roots, omitting trivial steps; every nontrivial step has degree $p$ and its polynomial has a unique root, so is normal. Together these constructions prove the finite coprime reduction in every characteristic, including $E=F$ and the empty tower. [F4, F5, F6, step 2.2, step 3.1, construct, algebra]

5.1 Finally extend coefficients to a normal $M$ as in step 2.2, without the Sylow reduction. If $E_s$ is the maximal separable subfield of $E/F$, its tensor product with $M$ is a product of copies of $M$ indexed by embeddings $E_s\to M$: take a finite separable generating tower and factor each minimal polynomial into distinct linear factors. Over each such factor, the purely inseparable extension $E/E_s$ gives a local algebra with residue $M$, since every element has a power equal to its unique specified image in $M$. Its dimension, and hence length over its residue $M$, is $[E:E_s]$. This is the inseparable degree, and every embedding $E_s\to M$ extends uniquely to $E\to M$ by uniqueness of these roots. Therefore all tensor factors have residue $M$ and that same length. Every branch residue tower is now a tower of identity extensions, whose presented transfers are identity by projection and $T(1)=1$ in [F1]. Step 2.1 gives exactly the embedding sum with inseparable multiplicity, for every chosen tower, without comparing any two canonical norms. [F1, F2, F4, step 2.1, step 2.2, algebra] ∎

