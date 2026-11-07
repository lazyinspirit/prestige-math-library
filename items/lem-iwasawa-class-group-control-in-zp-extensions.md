---
id: lem-iwasawa-class-group-control-in-zp-extensions
kind: lemma
title: 'Class-group control in a cyclotomic $\mathbb Z_p$-extension'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-cyclotomic-iwasawa-class-group-module
  - def-dependent-choice
  - def-relative-ideal-norm-in-number-field-extension
  - lem-cyclotomic-finite-base-control-under-unramified-uniqueness
  - lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels
  - lem-trace-kernels-give-uniform-coinvariant-control-under-finite-base
  - lem-relative-ideal-norm-of-principal-ideal
  - thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-class-field-existence-number-field
  - thm-number-field-ray-class-field-artin-isomorphism
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC are inherited through the ray-class Artin and global class-field suppliers used for the class-group control map.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Proposition 3.2.11, Remark 3.2.12, Lemma 3.2.13 and proof, printed pp. 80–82; the trace-kernel identity does not itself assert bounded ordinary-coinvariant kernel order."
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC through the cited global class-field and Artin interfaces. Let $K$ be a totally real number field and $p$ any prime. For odd $p$, let $\mathbb Q_{\mathrm{cyc},p}$ be the unique $\mathbb Z_p$ subextension of $\mathbb Q(\mu_{p^\infty})/\mathbb Q$; for $p=2$, let it be $\bigcup_{n\ge0}\mathbb Q(\mu_{2^{n+2}})^+$, with $+$ denoting the fixed field of complex conjugation. Put $K_\infty=K\mathbb Q_{\mathrm{cyc},p}$ with degree-$p^n$ layers $K_n$. Put $A_n=\operatorname{Cl}(\mathcal O_{K_n})[p^\infty]$, $X_{K,p}=\varprojlim A_n$, $\Gamma=\operatorname{Gal}(K_\infty/K)$, and $\Gamma_n=\operatorname{Gal}(K_\infty/K_n)$. The Artin maps and norm maps induce a homomorphism
$$X_{K,p}/\Gamma_nX_{K,p}\longrightarrow A_n$$
whose kernel and cokernel are finite and bounded in order independently of $n$ for all sufficiently large $n$.

## Statement references

[J. Sharifi, *Iwasawa Theory*, Proposition 3.2.11, Remark 3.2.12 and Lemma 3.2.13, pp. 80–82](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** The cyclotomic tower, its Galois groups, and the class-group module.

[F1] By definition, $X_{K,p}$ is the inverse limit under relative ideal norms and carries the continuous $\Gamma$-action. [[def-cyclotomic-iwasawa-class-group-module]]

[F2] Relative ideal norms on prime ideals are defined by residue-degree-weighted contraction. [[def-relative-ideal-norm-in-number-field-extension]]

[F3] Relative ideal norm descends to ideal classes by the principal-ideal norm identity. [[lem-relative-ideal-norm-of-principal-ideal]]

[F4] The cyclotomic class-group limit is a finitely generated torsion $\Lambda$-module. This does not by itself assert finite ordinary coinvariants. [[thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion]]

[F5] Ray class groups are identified with the corresponding Galois groups by Artin reciprocity. [[thm-number-field-ray-class-field-artin-isomorphism]]

[F6] The global Artin map induces the idèle norm quotient isomorphism. [[thm-global-artin-reciprocity-and-norm-index]]

[F7] Every open finite-index idèle class subgroup is a finite abelian norm subgroup. [[thm-global-class-field-existence-number-field]]

[F8] For some $m$ and every $n\ge m$, the norm projection $X=X_{K,p}\to A_n$ is surjective, with kernel $Y_n=\omega_nX+\sum_i\mathbb Z_p\nu_{n,m}g_i$, where $\omega_n=\gamma^{p^n}-1$ and $\nu_{n,m}=\sum_{j=0}^{p^{n-m}-1}\gamma^{jp^m}$. This gives a uniform $\mathbb Z_p$-rank bound, without asserting finite kernel order. [[lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels]]

[F9] If a $\gamma$-stable finite-index subgroup $Y_m$ contains $\omega_mX$, if $X/\omega_mX$ is finite, and if $Y_n=\nu_{n,m}Y_m$, then $X/\omega_nX\to X/Y_n$ is onto with kernel order at most $|Y_m/\omega_mX|$. The finite-base hypothesis is explicit. [[lem-trace-kernels-give-uniform-coinvariant-control-under-finite-base]]

[F10] At a stable index $m$, let $L_\infty/K_\infty$ be the maximal finite-place-unramified abelian pro-$p$ extension that is totally real. Then $X/\omega_mX$ is finite if and only if $K_\infty$ is the only $\mathbb Z_p$-extension of $K_m$ contained in $L_\infty$. Under this condition the control maps have uniformly bounded kernel orders. If there is just one prime above $p$ in $K_m$, the control maps are isomorphisms without the uniqueness condition. [[lem-cyclotomic-finite-base-control-under-unramified-uniqueness]]

[A1] The remaining missing premise for applying [F9] to [F8] in general is finiteness of $X/\omega_mX$ at a sufficiently late base level, equivalently the exact uniqueness condition in [F10]. Neither the finite generation and torsion in [F4] nor the uniform rank bound in [F8] establishes this premise. The conditional and one-stable-prime cases are supplied by [F10]; general uniqueness and the full bounded-order Statement remain unproved here.

[A2] AC, Countable Choice, and DC are inherited through the named ray-class Artin, global class-field and arithmetic tower suppliers [F5]–[F8]; these axioms are assumed only for those interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-global-class-field-existence-number-field]]

## Proof

**Given:** The data in the Statement.

1.1 Use the index $m$ and elements $g_i$ of [F8]. The geometric-series identity $\nu_{n,m}\omega_m=\omega_n$ gives $Y_n=\nu_{n,m}Y_m$. At $n=m$, surjectivity in [F8] identifies $X/Y_m$ with the finite group $A_m$, so $Y_m$ has finite index. It is $\gamma$-stable because the norm projection is equivariant, and contains $\omega_mX$. For every $n\ge m$, [F8] therefore induces a surjection $X/\omega_nX\to A_n$, with kernel $Y_n/\omega_nX$ and zero cokernel. The choice assumptions are those in [A2]. [F1, F8, A2, given, algebra]

2.1 If $X/\omega_mX$ is finite, [F9] applied to step 1.1 bounds the kernel order by $|Y_m/\omega_mX|$, independently of $n$. By [F10] this premise holds precisely under its uniqueness condition inside the specified totally real unramified tower. This is a conditional deduction only: [A1] records the missing general arithmetic premise. In particular, a bound on $\mathbb Z_p$-rank cannot be replaced by a bound on order. [F9, F10, A1, step 1.1, algebra]

3.1 If there is exactly one prime above $p$ at the stable level $m$, the sum in the kernel formula [F8] is empty, so $Y_n=\omega_nX$ for every $n\ge m$. The surjection of step 1.1 is therefore an isomorphism, proving the Statement in this special case, consistently with [F10]. No uniqueness assumption is needed in this case. For several stable primes, [A1] remains unresolved; the full Statement at its unchanged hypotheses is not proved. [F8, F10, A1, step 1.1, algebra] ∎
