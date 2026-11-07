---
dependency_level: 2
id: lem-relative-triples-over-a-dedekind-domain-are-torsion-module-classes
kind: lemma
title: Relative triples over a Dedekind domain are torsion-module classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-relative-algebraic-k0-group
- def-dedekind-domain
- def-axiom-of-choice
- lem-finite-torsionfree-modules-over-dedekind-domains-are-projective
- thm-unique-factorisation-of-ideals-in-dedekind-domains
- def-composition-series-and-length-of-a-module
- thm-jordan-holder-theorem-for-modules
- cor-length-is-additive-in-short-exact-sequences
- thm-localisation-of-modules-is-exact
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- thm-smith-normal-form-existence-over-a-pid
- thm-chinese-remainder-theorem-for-comaximal-ideals
- lem-finite-projective-modules-over-a-domain-have-constant-rank
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Weibel, The K-book, relative triple presentation and relative localization
    url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain with fraction field $K$. Let $G_{\mathrm{tor}}(R)$ be the abelian group on isomorphism classes of finitely generated torsion $R$-modules, with relations $[M]=[M']+[M'']$ for short exact sequences. For a finite projective presentation $0\to L\xrightarrow{i}F\to M\to0$, put $c(M)=[L,i_K,F]\in K_0(R,K)$. This is independent of the presentation and induces an isomorphism $c:G_{\mathrm{tor}}(R)\to K_0(R,K)$. If $(P,\alpha,Q)$ is a relative triple and $E$ is any lattice containing both $\alpha(P)$ and $Q$ in $K\otimes_RQ$, its inverse is
$$
c^{-1}([P,\alpha,Q])=[E/\alpha(P)]-[E/Q].
$$
Moreover $[M]\mapsto\sum_{\mathfrak p\ne0}\operatorname{length}_{R_{\mathfrak p}}(M_{\mathfrak p})[\mathfrak p]$ is an isomorphism from $G_{\mathrm{tor}}(R)$ to the free abelian group on nonzero prime ideals. Under these two isomorphisms the relative triple maps to $\sum_{\mathfrak p\ne0}v_{\mathfrak p}(\det\alpha_{\mathfrak p})[\mathfrak p]$.

## Statement references

[Weibel, The K-book, relative triple presentation and relative localization](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)


## Facts & Assumptions

**Given:** A Dedekind domain $R$, its field $K$, and AC.

[F1] [[lem-finite-torsionfree-modules-over-dedekind-domains-are-projective]]: finite torsion-free modules over $R$ are projective; this supplier assumes AC, which is retained here. A submodule of a finite module is finite since $R$ is noetherian.

[F2] [[thm-chinese-remainder-theorem-for-comaximal-ideals]], [[thm-unique-factorisation-of-ideals-in-dedekind-domains]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]], and [[thm-localisation-of-modules-is-exact]]: nonzero ideals of $R$ factor into finitely many nonzero prime ideals; distinct such primes are comaximal. Localizing at a nonzero prime gives a DVR, and localization is exact.

[F3] [[def-composition-series-and-length-of-a-module]], [[thm-jordan-holder-theorem-for-modules]], and [[cor-length-is-additive-in-short-exact-sequences]]: finite-length modules admit composition series with uniquely determined simple multiplicities, and length is additive in short exact sequences.

[F4] [[lem-finite-projective-modules-over-a-domain-have-constant-rank]] makes the localized finite projectives free; [[thm-smith-normal-form-existence-over-a-pid]]: square full-rank matrices over a DVR have Smith normal form under invertible row and column operations.

[A1] [[def-axiom-of-choice]] is assumed for the torsion-free-projectivity and ideal-factorization suppliers.

[F5] [[def-relative-algebraic-k0-group]] gives the triple relations.

## Proof

**Proof technique:** direct.

1.1 Every finite torsion module $M$ admits such a presentation: choose a finite free cover $F\to M$. Its kernel $L$ is finite and torsion-free, so [F1] makes it projective. Localization makes the injection $L\to F$ an isomorphism because $M_K=0$. More generally the same construction works with any finite projective cover. To compare two presentations $L\to F\to M$ and $L'\to F'\to M$, use their fiber product $H=F\times_MF'$. Its projections give exact sequences $0\to L\to H\to F'\to0$ and $0\to L'\to H\to F\to0$, which split since $F,F'$ are projective. The inclusion $H\to F\oplus F'$ becomes a generic isomorphism. Applying the exact-sequence relation for triples to either projection gives $[H,j_K,F\oplus F']=[L,i_K,F]+[F',1,F']=[L',i'_K,F']+[F,1,F]$. Identity triples are zero by the composition relation. Thus $c(M)$ is independent of the presentation. [F1, given, construct, algebra]

1.2 Regard $P,Q$ as lattices in their generic vector spaces, and use $\alpha$ to put $P$ in the space $V=K\otimes_RQ$. The sum $E=\alpha(P)+Q\subseteq V$ is a finite torsion-free module, hence a finite projective by [F1]. It contains both lattices, and each quotient is finite torsion because both lattices span $V$. For another containing lattice $E'$ containing $E$, the exact sequences $0\to E/\alpha(P)\to E'/\alpha(P)\to E'/E\to0$ and $0\to E/Q\to E'/Q\to E'/E\to0$ show that $[E/\alpha(P)]-[E/Q]$ is unchanged. Comparing any two choices through their sum proves independence. Transporting everything through a generic isomorphism also preserves the expression. In particular it respects isomorphisms of triples. [F1, construct, algebra]

1.3 Every finite torsion module has finite length. For the zero module this is its empty composition series. Otherwise a nonzero scalar $a$ annihilates it, by multiplying annihilators of finitely many generators. Factor $(a)=\prod_{j=1}^t\mathfrak p_j^{e_j}$. The Chinese remainder decomposition reduces $R/(a)$ to the rings $R/\mathfrak p_j^{e_j}$. Each of these has the finite filtration by powers of $\mathfrak p_j$; its successive quotients are finite-dimensional $R/\mathfrak p_j$-vector spaces since their ideals are finitely generated. Thus $R/(a)$, and any quotient of a finite direct sum of copies of it, has finite length. Its simple modules are exactly $R/\mathfrak p$ for nonzero maximal ideals $\mathfrak p$: every simple finite $R$-module is cyclic, and its annihilator is maximal and contains $a$. [F1, F2, F3, construct, algebra]

2.1 For $0\to M'\to M\to M''\to0$, choose finite projective presentations of $M'$ and $M''$. Lift the projective cover $F''\to M''$ to $M$, and combine it with $F'\to M'\to M$ to obtain a cover $F'\oplus F''\to M$. Its kernel $L$ fits into $0\to L'\to L\to L''\to0$: projection to $F''$ lands in $L''$, is surjective after correcting a lift by an element of $F'$, and has kernel $L'$. All these modules are finite projective by [F1]. The resulting exact sequence of triples gives $[L,i_K,F'\oplus F'']=[L',i'_K,F']+[L'',i''_K,F'']$. Hence $c$ is additive and defines a homomorphism from $G_{\mathrm{tor}}(R)$. [F1, step 1.1, construct, algebra]

2.2 The expression in step 1.2 is additive for exact sequences of triples. Choose splittings of both underlying sequences of projectives, so that $P=P'\oplus P''$, $Q=Q'\oplus Q''$ and the generic map has matrix $\left(\begin{smallmatrix}\alpha'&b\\0&\alpha''\end{smallmatrix}\right)$. Choose $E'$ containing $Q',\alpha'(P'),b(P'')$ in the first generic factor, and $E''$ containing $Q'',\alpha''(P'')$ in the second. The lattice $E'\oplus E''$ contains $Q$ and $\alpha(P)$. Projection gives an exact sequence $0\to E'/\alpha'(P')\to(E'\oplus E'')/\alpha(P)\to E''/\alpha''(P'')\to0$. Injectivity on the left follows because $\alpha''$ is a generic isomorphism and $P''$ is torsion-free: an element of $\alpha(P)$ with second coordinate zero comes from $P'$. The quotient for $Q$ is the corresponding direct sum. The required additivity follows. [F1, step 1.2, construct, algebra]

2.3 In $G_{\mathrm{tor}}(R)$ a composition series expresses $[M]$ as the sum of its simple factors. A simple $R/\mathfrak q$ localizes to zero at $\mathfrak p\ne\mathfrak q$ and to the residue field, of length one, at $\mathfrak q$. Exact localization and additivity of length therefore show that $[M]\mapsto(\operatorname{length}_{R_{\mathfrak p}}M_{\mathfrak p})_{\mathfrak p}$ is a well-defined homomorphism to the direct sum of copies of $\mathbb Z$. It sends the simple classes to its standard basis, and the composition-series formula shows these classes generate. The map taking each standard basis vector to $[R/\mathfrak p]$ is its two-sided inverse. [F2, F3, step 1.3, construct, algebra]

3.1 For composable triples $P\xrightarrow{\alpha}Q\xrightarrow{\beta}T$, put all three lattices $\beta\alpha(P),\beta(Q),T$ in $K\otimes_RT$, and take a lattice containing them. The expression for the first triple is $[E/\beta\alpha(P)]-[E/\beta(Q)]$, that for the second is $[E/\beta(Q)]-[E/T]$, and their sum is the expression for the composite. Step 1.2 justifies using this larger common lattice and transporting by $\beta$. Thus the expression defines a homomorphism $b:K_0(R,K)\to G_{\mathrm{tor}}(R)$. [step 1.2, step 2.2, algebra]

4.1 For a presentation of $M$, use $E=F$ to see $bc([M])=[M]$. Conversely, the inclusions in step 1.2 are projective presentations of $E/\alpha(P)$ and $E/Q$. Hence $cb([P,\alpha,Q])=[P,\alpha,E]-[Q,\iota,E]=[P,\alpha,Q]$ by the composition relation, with the inclusion maps understood as generic isomorphisms. Therefore $b,c$ are mutually inverse isomorphisms. [step 1.1, step 2.1, step 1.2, step 3.1, algebra]

5.1 For a fixed nonzero prime $\mathfrak p$, localize step 1.2. The three lattices become free of the same finite rank over the DVR $D=R_{\mathfrak p}$. Choose a basis of $E_{\mathfrak p}$ and bases of $P_{\mathfrak p},Q_{\mathfrak p}$; let $A,B$ be the inclusion matrices of $\alpha(P_{\mathfrak p})$ and $Q_{\mathfrak p}$ in $E_{\mathfrak p}$. For rank zero all lattices and quotients are zero and the empty determinant is one, so the assertion is immediate; otherwise Smith reduction [F4] gives $\operatorname{length}_D(\operatorname{coker}A)=v_{\mathfrak p}(\det A)$, since a diagonal entry $u\pi^e$ contributes the cyclic quotient $D/\pi^e$ of length $e$; the same holds for $B$. The matrix of $\alpha$ in the chosen $P,Q$ bases is $B^{-1}A$. Hence their length difference is $v_{\mathfrak p}(\det A)-v_{\mathfrak p}(\det B)=v_{\mathfrak p}(\det\alpha_{\mathfrak p})$. Combined with steps 4.1 and 2.3, this proves the last assertion, including finite support and independence of representatives and bases. [F2, F4, step 1.2, step 4.1, step 2.3, algebra] ∎
