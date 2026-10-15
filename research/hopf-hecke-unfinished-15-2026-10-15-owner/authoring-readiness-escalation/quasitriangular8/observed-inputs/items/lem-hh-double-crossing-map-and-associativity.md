---
id: lem-hh-double-crossing-map-and-associativity
kind: lemma
title: "Double crossing laws and associativity"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 9
deps:
  - def-hh-finite-double-cross-relations
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - def-hh-hopf-algebra-and-antipode
  - lem-hh-convolution-algebra-associativity-and-unit
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §4.3"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §7.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
---

## Statement

For the candidate crossing $\chi$ and product on $D(H)$ in [[def-hh-finite-double-cross-relations]], $\chi$ is unital and satisfies both distributive laws for multiplication in $H$ and $H^{*\mathrm{op}}$. Consequently the candidate product is associative and unital, with injective algebra embeddings $H^{*\mathrm{op}}\hookrightarrow D(H)$ and $H\hookrightarrow D(H)$ in normal order.

## Facts & Assumptions

**Given:** A finite-dimensional Hopf algebra $H$ over a field $k$ with bijective antipode $S$, and the candidate $D(H)$ and $\chi$ of [[def-hh-finite-double-cross-relations]]. Prove the crossing laws and associativity.

[F1] [[def-hh-hopf-algebra-and-antipode]]: $H$ has a coassociative coproduct and counit, and its antipode satisfies $\sum S(h_1)h_2=\varepsilon(h)1=\sum h_1S(h_2)$.

[F2] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for finite-dimensional spaces, the dual of a tensor product is identified with the tensor product of the duals, so evaluation separates elements of the finite dual tensor.

[L1] [[def-hh-finite-double-cross-relations]]: $\chi(h\otimes f)=\sum f_1(S(h_1))f_3(h_3)f_2\otimes h_2$ and $(f\otimes h)(g\otimes k)=\sum g_1(S(h_1))g_3(h_3)(g_2*f)\otimes h_2k$.

[F3] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: $S$ is anti-multiplicative and anti-comultiplicative, and $\varepsilon\circ S=\varepsilon$.

[F4] [[lem-hh-convolution-algebra-associativity-and-unit]]: the convolution product on $H^*$ is associative and unital, so its opposite product is also associative and unital.

[A1] The finite-dimensional Hopf algebra with bijective antipode is the explicit hypothesis of [[def-hh-finite-double-cross-relations]].

## Proof


1.1 Pairing the first tensor factor of $\chi(h\otimes f)$ with $x\in H$ gives $\sum f(S(h_1)x h_3)h_2$, because $\Delta_{H^*}^{(2)}f$ evaluates on the three consecutive factors of $S(h_1)x h_3$. This determines $\chi$ uniquely by finite tensor separation. [given, A1, F2, L1, construct]

1.2 The unit identities are $\chi(1\otimes f)=f\otimes1$ and $\chi(h\otimes\varepsilon_H)=\varepsilon_H\otimes h$: the first contracts the first and third dual factors by $\varepsilon_H$, and the second uses $\varepsilon_H\circ S=\varepsilon_H$ from [F3] and the two counit identities in [F1]. [F1, F3, L1, algebra]

1.3 For $h,k\in H$, the two sides of $\chi(hk\otimes f)=(\operatorname{id}\otimes m_H)(\chi\otimes\operatorname{id})(\operatorname{id}\otimes\chi)(h\otimes k\otimes f)$, paired with $x$, both equal $\sum f(S(k_1)S(h_1)x h_3k_3)h_2k_2$. On the left use $S(h_1k_1)=S(k_1)S(h_1)$ from [F3]; on the right, the successive crossings evaluate $f_1(S(k_1))f_2(S(h_1))f_3(x)f_4(h_3)f_5(k_3)$, which is the same dual coproduct evaluation. [F2, F3, L1, algebra]

1.4 For $f,g\in H^*$, the left side of $\chi(h\otimes(f\odot g))=(m_{H^{*\mathrm{op}}}\otimes\operatorname{id})(\operatorname{id}\otimes\chi)(\chi\otimes\operatorname{id})(h\otimes f\otimes g)$, paired with $x$, is $(g*f)(S(h_1)x h_3)$. Since $\Delta(S(h_1)x h_3)=\sum S(h_2)x_1h_4\otimes S(h_1)x_2h_5$ by [F3] and multiplicativity of $\Delta$, this equals $\sum g(S(h_2)x_1h_4)f(S(h_1)x_2h_5)h_3$, which is also the result of the two successive crossings on the right. [F1, F2, F3, L1, algebra]

2.1 Write $\chi(h,b)=\sum b_1\otimes h_1$, $\chi(k,c)=\sum c_1\otimes k_1$, and, for each such term, $\chi(h_1,c_1)=\sum c_2\otimes h_2$. Starting with $(a\otimes h),(b\otimes k),(c\otimes l)$, the left association first crosses $h$ past $b$, then crosses the product $h_1k$ past $c$; the $H$ distributive law of step 1.3 expands that second crossing as first crossing $k$ past $c$, then $h_1$ past the resulting $c_1$. It therefore gives $\sum a b_1 c_2\otimes h_2k_1l$. The right association first crosses $k$ past $c$, then crosses $h$ past the product $bc_1$; the $H^{*\mathrm{op}}$ distributive law of step 1.4 expands that crossing as first crossing $h$ past $b$, then $h_1$ past $c_1$, giving the same sum. Associativity of both factor products follows for $H$ from [F1] and for $H^{*\mathrm{op}}$ from [F4]. Thus the associations agree on simple tensors and, by multilinearity, everywhere. The unit identities of step 1.2 make $\varepsilon_H\otimes1_H$ a two-sided unit. [F1, F4, step 1.2, step 1.3, step 1.4, L1, algebra]

3.1 The maps $f\mapsto f\otimes1_H$ and $h\mapsto\varepsilon_H\otimes h$ preserve products by step 1.2 and the defining multiplication. They are injective because applying $\operatorname{id}_{H^*}\otimes\varepsilon_H$ or $\varepsilon_{H^*}\otimes\operatorname{id}_H$ recovers the input; $\varepsilon_H(1_H)=1$. [F1, step 1.2, L1, algebra] ∎
## Remarks

The paired multiplication-law calculations use only finite tensor evaluations; they do not use a presentation of $D(H)$ or an unproved PBW theorem. The actual HH-4 antipode anti-multiplication/anti-comultiplication proof remains an unresolved cross-batch supplier check.
