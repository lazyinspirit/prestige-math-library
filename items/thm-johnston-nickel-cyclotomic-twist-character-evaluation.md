---
id: thm-johnston-nickel-cyclotomic-twist-character-evaluation
kind: theorem
title: Johnston–Nickel Cyclotomic Twist Identity for Character Evaluations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-iwasawa-algebra-of-profinite-group
  - def-iwasawa-algebra-of-profinite-abelian-group
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-wedderburn-artin-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, On the Non-Abelian Brumer–Stark Conjecture and the Equivariant Iwasawa Main Conjecture
      url: https://www.unibw.de/timor/mitarbeiter/nickel/brumer-stark.pdf
      locator: Lemma 6.1 and proof, printed pp. 15–16; definitions in §§4.4–4.6.
verification: {}
---

## Statement

Let $p$ be odd, let $K$ be a number field, and let $L/K$ be a Galois extension containing the cyclotomic $\mathbb Z_p$-extension $K_\infty/K$ with finite kernel $H=\operatorname{Gal}(L/K_\infty)$ and group $G=\operatorname{Gal}(L/K)=H\rtimes\Gamma$, where $\Gamma\cong\Gamma_K:=\operatorname{Gal}(K_\infty/K)\cong\mathbb Z_p$. Assume $\zeta_p\in L$. Let $\gamma_K$ be a topological generator of $\Gamma_K$ and put $u=\kappa(\gamma_K)$ for the principal-unit projection $\kappa$ of the cyclotomic character. For an irreducible $\overline{\mathbb Q}_p$-valued character $\chi$ of $G$ with open kernel, choose an irreducible constituent $\eta$ of $\chi|_H$, let $\operatorname{St}(\eta)=\{g\in G:\eta^g=\eta\}$ with $\eta^g(h)=\eta(g^{-1}hg)$, and put $w_\chi=[G:\operatorname{St}(\eta)]$. Let $F/\mathbb Q_p$ be a finite extension containing realizations of $\chi$ and $\eta$, and put $Q_F(G)=F\otimes_{\mathbb Q_p}Q_p(G)$. In the source convention, $\gamma_\chi$ is the unique central generator in the $\chi$-component acting trivially on its realization and having group factor mapping to $\gamma_K^{w_\chi}$ modulo $H$; the evaluation map $j_\chi^r$ sends $\gamma_\chi$ to $(u^r\gamma_K)^{w_\chi}$. Let $t_{\mathrm{cyc}}^s$ be induced on $Q_F(G)$ by $g\mapsto\chi_{\mathrm{cyc}}(g)^s g$, and let $\omega$ be the finite-order Teichmüller projection in $\mathbb Z_p^\times=\mu_{p-1}\times(1+p\mathbb Z_p)$. Then for every $x\in\zeta(Q_F(G))$ and every $r,s\in\mathbb Z$,
$$j_\chi^r\!\left(t_{\mathrm{cyc}}^s(x)\right)=j_{\chi\omega^s}^{r+s}(x).$$

## Statement references

[Johnston and Nickel, Lemma 6.1](https://www.unibw.de/timor/mitarbeiter/nickel/brumer-stark.pdf)

## Facts & Assumptions

**Given:** Exactly the field, group, finite-character realizations and integers in the Statement. All selections below are finite-dimensional selections; no choice axiom is added.

[F1] A finite-group representation in characteristic zero is a direct sum of irreducibles. [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

[F2] A finite-dimensional semisimple algebra is a finite product of matrix algebras over division rings. In particular, the factor belonging to an absolutely irreducible representation realized over $F$ is its full $F$-endomorphism algebra. [[thm-wedderburn-artin-theorem]]

[F3] Completed group rings are inverse limits of finite group rings. For a procyclic group, the coordinate associated with a generator identifies its completed group ring with the power-series ring; a subgroup of index $m$ gives a free module with basis the first $m$ powers of that generator. [[def-iwasawa-algebra-of-profinite-group]], [[def-iwasawa-algebra-of-profinite-abelian-group]]

## Proof

**Proof technique:** construct the character-component coordinate, then compare the two substitutions on that coordinate.

1.1 Choose a lift $q\in\Gamma$ of $\gamma_K$. Since $H$ is finite and the representation $\rho_\chi$ has open kernel, there is a power $m=p^a$ such that $q^m$ centralizes $H$ and $\rho_\chi(q^m)=1$. Put $\Gamma_0=\langle q^m\rangle$. The cosets $hq^j$, $h\in H$, $0\le j<m$, give, by the finite quotient decompositions and inverse limits of [F3], a free module decomposition over $\mathbb Z_p[[\Gamma_0]]$. After extending scalars and passing to its fraction field $E_0$, the resulting algebra has basis $hq^j$ and relations $q^m=z_0$, where $z_0$ denotes the group generator of $\Gamma_0$. This is the usual total quotient algebra $Q_F(G)$: after a finite scalar extension containing an $m$th root of $z_0$, replacing $q$ by that root's inverse times $q$ identifies this algebra with a finite group algebra, which is semisimple by [F1]. Thus it is semisimple already over $E_0$; its regular elements are invertible, and localizing the original completed ring at all regular elements gives exactly this algebra. The central scalar denominators were already regular on its displayed free module. [F1, F3, given, algebra]

1.2 Decompose $V_\chi|_H$ by [F1]. The sum of the isotypic components in any orbit under $q$ is $G$-stable, so irreducibility leaves one orbit, of length $w=w_\chi$. The $\eta$-isotypic component $W$ is irreducible under $H$ and $q^w$: a proper submodule would give a proper $G$-submodule by summing its $w$ translates. Over an algebraic closure of $F$, write $W=V_\eta\otimes U$. Since $\eta^{q^w}=\eta$, an invertible intertwiner on $V_\eta$ identifies the action of $q^w$ with $B\otimes C$ for a matrix $C$ on $U$; the commutant on the absolutely irreducible first factor consists of scalars. An eigenvector of $C$ spans an invariant line in $U$. The preceding irreducibility therefore forces $\dim U=1$. Consequently the restriction is multiplicity-free, and its $w$ constituents are the conjugates of $\eta$. They are all realized over $F$, by transporting the given realization of $\eta$. [F1, F2, step 1.1, given, algebra]

1.3 Let $e$ be the sum of the primitive idempotents of these $w$ constituents in $F[H]$. The split matrix decomposition [F2] identifies
$$F[H]e=\prod_{j=0}^{w-1}\operatorname{End}_F(W_j),$$
where $W_j$ are the distinct $H$-components in $V_\chi$. In particular its action on their direct sum is faithful. The operator $\rho_\chi(q^w)$ preserves every $W_j$, so there is a unique $c\in(F[H]e)^\times$ acting on each $W_j$ as $\rho_\chi(q^w)^{-1}$. Set $z=q^wc$. Its action on $V_\chi$ is the identity. Conjugation by $q^w$ on $F[H]e$ agrees with conjugation by $\rho_\chi(q^w)$ on the displayed matrices. Hence $z$ commutes with $F[H]e$. Also $qcq^{-1}=c$: both sides act as $\rho_\chi(q^w)^{-1}$ on every $W_j$, so faithfulness proves equality. Thus $z$ is central in $Q_F(G)e$. Any element $q^wc'$ of this form acting identically on $V_\chi$ has $c'=c$, proving the required uniqueness (absorbing an $H$-factor into $c'$ allows any lift of $\gamma_K^w$). [F2, step 1.2, algebra]

1.4 Write $d=m/w$. Since $z$ commutes with $q$ and $c$, and $\rho_\chi(q^m)=1$, faithfulness in step 1.3 gives $c^d=e$ and
$$z^d=q^me=z_0e.$$
The same construction with any sufficiently large power $p^b$ shows $z^{p^b}=q^{wp^b}e\to e$; its powers therefore extend to a continuous procyclic $p$-subgroup $\Gamma_\chi$. It has no finite order, because $q^me$ has none. Its power-series algebra embeds in the component: the coset exponents of $1,z,\ldots,z^{d-1}$ modulo $m$ are distinct, giving linear independence over the coefficient ring of $\Gamma_0$. [F3, step 1.1, step 1.3, algebra]

1.5 We identify the full center, rather than merely a central subfield. Expand an element of $Q_F(G)e$ in the distinct cosets $q^j$, $0\le j<m$, with coefficients in $E_0[H]e$. Commuting with the primitive block idempotents forces $j$ to be divisible by $w$: otherwise $q^j$ permutes those idempotents without a fixed block. For $j=kw$, replace $q^{kw}$ by $z^kc^{-k}$. Its coefficient commutes with all of $F[H]e$ exactly when it is scalar on each matrix block. Commuting with $q$, which permutes the $w$ blocks transitively and fixes $z$, makes those scalars equal. The center is therefore
$$\bigoplus_{k=0}^{d-1}E_0z^k=Q_F(\Gamma_\chi),$$
where the last equality follows from the procyclic finite-index free decomposition [F3] and $z^d=z_0e$. This is a field, so $e$ is a primitive central idempotent. Thus $e=e_\chi$ and $z=\gamma_\chi$, and substitution $\gamma_\chi\mapsto(u^r\gamma_K)^w$ defines $j_\chi^r$ on the whole component field. It is injective: the image generator generates an open procyclic subgroup up to a principal-unit scalar, and substitution by that scalar is an invertible power-series substitution. In particular nonzero denominators remain nonzero. [F2, F3, step 1.1, step 1.3, step 1.4, algebra]

2.1 For $\chi'=\chi\omega^s$, twisting by the one-dimensional character $\omega^s$ preserves irreducibility and the stabilizer of each $H$-constituent; hence $w_{\chi'}=w_\chi=w$. The automorphism $t_\omega^s:g\mapsto\omega(g)^sg$ sends $e_{\chi'}$ to $e_\chi$: evaluating $t_\omega^s(a)$ on $V_\chi$ is evaluating $a$ on $V_{\chi'}$. Moreover $t_\omega^s(\gamma_{\chi'})$ has group factor mapping to $\gamma_K^w$ and acts identically on $V_\chi$. The uniqueness proved in step 1.3 yields
$$t_\omega^s(\gamma_{\chi\omega^s})=\gamma_\chi.$$
[F1, step 1.3, step 1.5, given, algebra]

2.2 The principal-unit character $\kappa$ factors through $G/H=\Gamma_K$, since $K_\infty$ is the cyclotomic $\mathbb Z_p$-extension. Thus it is trivial on $H$ and equals $u^w$ on every lift of $\gamma_K^w$. Applying this to the group-factor expression in step 1.3 gives
$$t_{\mathrm{cyc}}^s(\gamma_{\chi\omega^s})=u^{sw}\gamma_\chi.$$
Both automorphisms fix the scalar field $F$, and $t_{\mathrm{cyc}}^s$ sends $e_{\chi\omega^s}$ to $e_\chi$. The same idempotent calculation as step 2.1 proves the latter assertion, since $\kappa$ is trivial on $H$. [step 1.3, step 2.1, given, algebra]

3.1 On the generator of the source component, the two maps in the Statement now agree:
$$j_\chi^r\!\left(t_{\mathrm{cyc}}^s(\gamma_{\chi\omega^s})\right)
=u^{sw}(u^r\gamma_K)^w
=(u^{r+s}\gamma_K)^w
=j_{\chi\omega^s}^{r+s}(\gamma_{\chi\omega^s}).$$
They fix $F$, and are the indicated continuous substitutions on the power-series ring and then its fraction field. Thus they agree on the entire component by step 1.5. The projection identities in step 2.2 show that the other components contribute zero to both sides, proving the equality for every central $x$, including $x=0$, and all positive, zero and negative integers $r,s$. [F3, step 1.5, step 2.2, algebra] ∎
