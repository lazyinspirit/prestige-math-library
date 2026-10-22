<!-- new lines at canonical 35 -->
  proof: ai-generated

<!-- new lines at canonical 43 -->
      url: https://arxiv.org/pdf/1710.01957v2

<!-- new lines at canonical 58 -->
[Sivek and Zentner, §§1 and 10](https://arxiv.org/pdf/1710.01957v2)

<!-- new lines at canonical 62 -->
**Given:** Full AC, the actual marked knots and primitive rational filling convention. The completed local operations and the explicitly imported full converse are distinguished below; the original full Statement is not narrowed.

<!-- new lines at canonical 74 -->
[L1] The full-set boundedness, unique finite rational limit, knot-or-mirror instanton L-space conclusion, fiberedness and adjacent-top alternating-unit Alexander properties are supplied as external inputs in [[lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs]], [L1]–[L2]. They are not consequences asserted from the local ASD foundations alone.

<!-- new lines at canonical 76 -->
[L2] The retained minimal-genus derivation uses the actual knot-exterior trichotomy, with the residual metric step described in [[thm-thurston-hyperbolization-for-atoroidal-knot-exteriors]]. Its local proof is not certified here. The full original classification is instead supplied directly by [E1], retaining all actual signed filling and satellite operations already proved locally.

[E1] **External input:** Baldwin–Sivek, arXiv:2405.19197v2, Theorem 1.1 (p.1), with Theorem 5.1 and its proof in §5, asserts for ANY knot in $S^3$ that infinitely many distinct rational $SL_2(\mathbb C)$-abelian surgeries occur if and only if it is a torus knot. Here “abelian” means EVERY homomorphism has abelian image, not only every irreducible homomorphism; this is their opening definition. Their §2 includes the unknot among torus knots. The actual statement, definitions and §5 theorem/transfer interfaces were consulted directly; the remaining published classification proof is imported, not locally reconstructed.

<!-- new lines at canonical 94 -->
5.1 Put $v=|w|$; the symmetric companion polynomial satisfies $\Delta_C(t^w)=\Delta_C(t^v)$. The finite torus-pattern obstruction is also elementary once the stated coefficient restrictions in [L1] have been supplied. Write $a>b\ge2$ coprime and $g=(a-1)(b-1)/2$. The formula in [F5], expanded at infinity, is $\Delta_{T_{a,b}}(t)=t^g(1-t^{-ab})(1-t^{-1})/((1-t^{-a})(1-t^{-b}))$. Modulo terms of degree at most $g-a$, its expansion is $\sum_{i=0}^{\lfloor a/b\rfloor}(t^{g-ib}-t^{g-ib-1})$. Thus, for $0\le v<a$, its coefficient $c_{g-v}$ is $1$ if $v=0\pmod b$, $-1$ if $v=1\pmod b$, and zero otherwise. Suppose the companion's normalized polynomial has leading terms $t^h-t^{h-1}+O(t^{h-2})$ and the satellite's nonzero coefficients alternate with absolute value one, exactly the two externally supplied instanton conclusions in [L1]. By step 4.1 its coefficient in degree $g+hv-v$ is $c_{g-v}-1$. If $v=1\pmod b$ this is $-2$, impossible. If $v=qb+r$ with $2\le r<b$, it is $-1$, while the preceding nonzero coefficient is the $-1$ in degree $g+hv-qb-1$: all intervening torus coefficients vanish and no lower companion term reaches those degrees. These consecutive negative coefficients contradict alternation. Consequently $b$ divides $v$ whenever $0<v<a$. This argument is a proved finite polynomial implication and uses the externally supplied instanton properties, without proving their gauge-theoretic foundations. [F5, L1, step 4.1, algebra]

<!-- new lines at canonical 96 -->
6.1 In particular the torus-pattern configuration required by the minimal-satellite argument is incompatible with those coefficient restrictions. If $ab=k v^2$ for an integer $k\ge1$, then $v<a$, since otherwise $ab\ge a^2>ab$. Step 5.1 makes $b\mid v$, whence $a=k b(v/b)^2$ contradicts $\gcd(a,b)=1$ and $b\ge2$. Mirroring a torus pattern does not change its symmetric Alexander polynomial, so the same contradiction applies after the prescribed mirror reduction. Also $v=1$ is already excluded as soon as both nontrivial pattern and companion have leading terms $t^g-t^{g-1}$ and $t^h-t^{h-1}$: their product has second leading coefficient $-2$. This is the finite polynomial contradiction needed for the conditional configuration in step2.1; it does not supply the externally supplied instanton conclusions. [L1, step 4.1, step 5.1, algebra]

<!-- new lines at canonical 98 -->
7.1 The companion torus in step2.1 has the adjacent leading terms required in step5.1 by its explicit torus formula [F5], without another instanton hypothesis on that companion. With $v=|w|$, the configuration of step2.1 satisfies $ab=cdv^2$; applying step6.1 to this positive $v$ gives a contradiction. Steps1.1–1.2 unconditionally prove the full signed-torus direction and the supplied-metric hyperbolic exclusion; [F2] proves all actual pattern/companion filling cases. Steps1.3–6.1 supply the remaining converse assembly with the exact externally supplied or explicitly conditional premises [L1,L2]. The exact full iff is now supplied independently by [E1], rather than claimed as a newly local gauge or hyperbolization proof. The original full Statement and representation scope remain unchanged. [F1, F2, F3, F4, F5, L1, L2, step 1.1, step 1.2, step 1.3, step 2.1, step 5.1, step 6.1]

8.1 Apply [E1] to the given smooth knot. Its rational filling and all-representations abelian conventions coincide with the Statement, and its torus convention includes the unknot. It gives the converse to the locally proved signed-torus direction and hence the full original equivalence. [E1, given, step 1.1] ∎

