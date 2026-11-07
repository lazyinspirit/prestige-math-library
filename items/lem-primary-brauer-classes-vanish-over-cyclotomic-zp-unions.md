---
id: lem-primary-brauer-classes-vanish-over-cyclotomic-zp-unions
kind: lemma
title: Primary Brauer classes vanish over cyclotomic Z_p unions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-unit-group-modulo-odd-prime-power-is-cyclic
  - thm-unit-group-modulo-two-power-structure
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - lem-number-field-completion-tensor-and-norm-in-zf
  - lem-degree-of-a-compositum-with-a-galois-extension
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - lem-local-invariant-restriction-scaling
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-archimedean-brauer-groups-and-invariant-maps
  - lem-finite-density-and-central-simple-base-change
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are public hypotheses for the actual BHN, local restriction and cyclotomic/completion interfaces. No global H3 or class-formation theorem is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: ChapterVII7 cyclic cyclotomic splitting; the fixed nested primary tower and all-finite-extension vanishing are constructed explicitly here
---

## Statement

Assume AC, Countable Choice and DC. Fix an algebraic closure of $\mathbb Q$ and a prime $\ell$. For odd $\ell$, let $Q_r$ be the unique degree-$\ell^r$ subfield of $\mathbb Q(\mu_{\ell^{r+1}})$, with $Q_0=\mathbb Q$. For $\ell=2$, let $Q_r=\mathbb Q(\mu_{2^{r+2}})^+$, its fixed field under complex conjugation. Put $Q_\infty=\bigcup_rQ_r$. Let $B$ be any number field in the closure and put $B_\infty=BQ_\infty$.

For every finite place $v$ of $B$ and every $m\ge0$, all sufficiently large $r$ satisfy
$$\ell^m\mid[B_v(Q_r)_p:B_v],$$
where $p$ is the rational prime below $v$ and the fields are embedded in compatible completions. Equivalently, the local degrees in $BQ_r/B$ are eventually divisible by every prescribed $\ell$-power, at every finite place. The extension $B_\infty/B$ is Galois with group topologically isomorphic to $\mathbb Z_\ell$. Real places stay real in this tower.

If $\ell$ is odd, then for every finite extension $A/B_\infty$ inside the closure,
$$\operatorname{Br}_{\mathrm{alg}}(A)[\ell^\infty]=0.$$
The same assertion holds for $\ell=2$ when $B$ is totally complex. Here the primary subgroup consists of classes killed by some power of $\ell$. No vanishing of the real dyadic Brauer obstruction, arbitrary finite-group $H^3$, or absolute $H^3$ is asserted.

## Facts & Assumptions

**Given:** Exactly the closure, prime, towers and public choice hypotheses in the Statement.

[F1] Rational cyclotomic Galois groups are the corresponding unit groups. Odd prime-power unit groups are cyclic; for $a\ge3$, the dyadic unit group is $\langle-1\rangle\times\langle5\rangle$, with the latter factor of order $2^{a-2}$. [[cor-the-galois-group-of-a-rational-cyclotomic-field]] [[thm-unit-group-modulo-odd-prime-power-is-cyclic]] [[thm-unit-group-modulo-two-power-structure]]

[F2] At a rational prime not dividing the conductor, arithmetic Frobenius on roots of unity is exponentiation by that prime. [[lem-arithmetic-frobenius-on-a-cyclotomic-field]]

[F3] Relative completion tensor and norm formulas hold at finite and archimedean places. Compositum degree with a finite Galois factor is its degree divided by the degree of the intersection. [[lem-number-field-completion-tensor-and-norm-in-zf]] [[lem-degree-of-a-compositum-with-a-galois-extension]]

[F4] Under AC, the number-field Brauer localization row is injective, every global class has finite local support, and the normalized invariant sum is exact. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[F5] Under AC/DC, restriction of local multiplicative Brauer classes multiplies the invariant by local degree. The finite algebraic comparison commutes with scalar extension. Real algebraic Brauer classes have exponent2 and the complex group is zero. [[lem-local-invariant-restriction-scaling]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]] [[thm-archimedean-brauer-groups-and-invariant-maps]]

[F6] For a central simple algebra $D/F$, the map $D\otimes_FD^{\mathrm{op}}\to\operatorname{End}_F(D)$ by left and right multiplication is an isomorphism. Its finite presentation and the algebraic Brauer group law are supplied locally. [[lem-finite-density-and-central-simple-base-change]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[A1] AC, Countable Choice and DC are the literal public hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 For odd $\ell$, [F1] gives a unique subgroup of order $\ell-1$ in the unit group modulo $\ell^{r+1}$; its fixed field has degree $\ell^r$. These subgroups restrict compatibly, so the $Q_r$ are nested and their Galois groups are cyclic. Their quotient transition maps are surjective. For $\ell=2$, quotienting the unit group by $\langle-1\rangle$ similarly gives nested real cyclic fields of degrees $2^r$. All $Q_r$ are totally real: for odd $\ell$, $-1$ is in the subgroup of order $\ell-1$, and in the dyadic case that is the definition. The compatible-tuple automorphisms of their union form an inverse limit of these cyclic groups, isomorphic to $\mathbb Z_\ell$ by compatible generators. Such generators can be chosen recursively using the public AC; each generator has a generator preimage. An automorphism of the union is precisely its compatible restrictions, so this is the actual Krull topology. [A1, F1, given, construct, algebra]

1.2 At the prime $\ell$, $\mathbb Q(\mu_{\ell^a})/\mathbb Q$ is totally ramified. An explicit verification suffices: $\Phi_{\ell^a}(1+X)$ is monic of degree $d=(\ell-1)\ell^{a-1}$, has constant coefficient $\ell$, and reduces modulo $\ell$ to $X^d$. For a primitive root put $x=\zeta-1$; its residue is zero since its residue has $\ell$-power order in residue characteristic $\ell$. If $v(x)<1/d$, the leading term is uniquely of smallest valuation, and if $v(x)>1/d$, the constant term is. Both are impossible in the displayed equation, so $v(x)=1/d$. Thus the local ramification index is at least the global degree $d$, and [F3] forces equality. Every subfield $Q_r$ consequently has local degree equal to its global degree at $\ell$. [F1, F3, step 1.1, construct, algebra]

2.1 Fix a rational prime $p\ne\ell$. If $\ell$ is odd and the Frobenius in $\operatorname{Gal}(Q_r/\mathbb Q)$ had order at most $\ell^c$, its representative $p$ in the full unit group would satisfy
$$p^{(\ell-1)\ell^c}\equiv1\pmod{\ell^{r+1}}.$$
For fixed $p,c$ the nonzero integer on the left minus1 has finite $\ell$-adic valuation, so this fails for all sufficiently large $r$. If $\ell=2$, order at most $2^c$ in the quotient by $\{\pm1\}$ would give $p^{2^c}\equiv\pm1\pmod{2^{r+2}}$, hence $p^{2^{c+1}}\equiv1$ there, again eventually impossible for that fixed nonzero integer. By [F2], these Frobenius orders are the unramified local degrees. Together with step 1.2 this proves unbounded primary local degrees at every rational finite prime, in the fixed nested tower. [F1, F2, step 1.1, step 1.2, algebra]

2.2 At a finite place $v$ of $B$ over $p$, [F3] identifies the completion of $BQ_r$ with $B_v(Q_r)_p$. Its degree over $B_v$ is the rational local degree divided by $[(Q_r)_p\cap B_v:\mathbb Q_p]$. This divisor is bounded by the fixed number $[B_v:\mathbb Q_p]$, and is an $\ell$-power. Step 2.1 therefore makes the quotient eventually divisible by every prescribed $\ell^m$, simultaneously on any finite list of places. The intersection $B\cap Q_\infty$ is a finite subfield of the procyclic tower, so equals some $Q_s$ and is contained in a finite level. Restriction identifies $\operatorname{Gal}(B_\infty/B)$ with the open subgroup fixing $Q_s$ in $\mathbb Z_\ell$, again isomorphic to $\mathbb Z_\ell$. For completeness, surjectivity follows by compatible finite compositum automorphisms; degree/intersection equality in [F3] gives these at every level. A real embedding of $B$ and the real tower has only real compositum embeddings, so its real places remain real. [A1, F3, step 1.1, step 2.1, construct, algebra]

3.1 Let $\beta\in\operatorname{Br}_{\mathrm{alg}}(B)$ be killed by $\ell^m$. By [F4] only finitely many finite invariants are nonzero, and [F5] makes their denominators divide $\ell^m$. By step 2.2 choose a level whose local degrees at all of them are divisible by $\ell^m$. Restriction scaling kills those invariants; all other finite local classes were already zero. At a real place the original class is zero when $\ell$ is odd, since its order divides both $\ell^m$ and2; when $\ell=2$ there are no real places by the additional hypothesis. Complex classes are zero. Applying [F4] over the number field $BQ_r$ shows that $\beta$ is zero there, hence in $B_\infty$. The identity class and empty support are included. [A1, F4, F5, step 2.2, construct, algebra]

4.1 Now let $A/B_\infty$ be finite and $\alpha\in\operatorname{Br}_{\mathrm{alg}}(A)$ killed by $\ell^m$. Choose finitely many generators of $A/B_\infty$ and one finite multiplication table for a central simple representative of $\alpha$. All these elements are algebraic numbers. They lie in a number field $C\subset A$ containing $B$ and the chosen generators. Enlarge $C$ to contain the finitely many entries of a splitting isomorphism of the $\ell^m$-fold tensor power of that representative to a matrix algebra, and its inverse. The finite table then descends to an associative unital algebra over $C$. It is central simple: its canonical map in [F6] has a determinant nonzero in $A$, hence already nonzero over $C$. A two-sided ideal stable under all left-right multiplications is then stable under all linear endomorphisms, so is zero or the whole algebra, and its center consists of scalars. Thus it represents $\beta\in\operatorname{Br}_{\mathrm{alg}}(C)$; the descended splitting isomorphism gives $\ell^m\beta=0$. If $B$ is totally complex, so is $C$. Step 3.1 over $C$ kills $\beta$ in $CQ_\infty$. This field equals $A$: it contains $B_\infty$ and the finite generating tuple, and lies in $A$ because $C,Q_\infty\subset A$. Hence $\alpha=0$. This proves vanishing on every finite extension, not merely classes already defined over the original base. [A1, F4, F5, F6, step 3.1, construct, algebra] ∎
