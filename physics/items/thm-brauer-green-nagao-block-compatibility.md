---
id: thm-brauer-green-nagao-block-compatibility
kind: theorem
title: Brauer–Green block compatibility
deps: ["def-induced-block-from-a-subgroup", "def-block-bimodule-for-the-double-group", "lem-block-induction-exists-under-centralizer-containment", "lem-relative-projectivity-mackey-intersections-for-finite-modules", "lem-tensoring-preserves-relative-projectivity-for-finite-group-modules", "thm-krull-schmidt-for-finite-dimensional-kg-modules", "thm-vertices-of-modules-in-a-block-lie-in-a-defect-group"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.5, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
    - title: Saunders, Modular Representation Theory, Theorem 5.17 and Corollary 5.18
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $Q\le G$ be a $p$-subgroup, let $H\le G$ contain $QC_G(Q)$, and let $V$ be an indecomposable finite-dimensional $kG$-module with vertex $Q$. If $U\mid\operatorname{Res}_H^G V$ is indecomposable with vertex $Q$, and $U,V$ belong to blocks $b,B$ respectively, then $b^G$ is defined and equals $B$. This is choice-free over a splitting residue field.

## Facts & Assumptions

**Given:** The stated modules, subgroups and blocks. Write $b=kHe$ and $B=kGf$.

[F1] [[def-induced-block-from-a-subgroup]] defines the block summand condition.

[F2] [[lem-block-induction-exists-under-centralizer-containment]] proves definedness under centralizer containment.

[F3] Mackey and vertex containment are [[lem-relative-projectivity-mackey-intersections-for-finite-modules]].

[F4] [[lem-tensoring-preserves-relative-projectivity-for-finite-group-modules]] preserves exclusion of vertices containing conjugates of $Q$.

[F5] [[thm-krull-schmidt-for-finite-dimensional-kg-modules]] supplies finite summand decompositions and cancellation.

[F6] [[thm-vertices-of-modules-in-a-block-lie-in-a-defect-group]] bounds the vertex of $U$ by a defect group of $b$.

[F7] The double action $(x,y)v=xvy^{-1}$ and diagonal notation are fixed by [[def-block-bimodule-for-the-double-group]].

## Proof

1.1 By F6 choose a defect group $D_b$ of $b$ containing the literal $Q$, after conjugating inside $H$. Then $C_G(D_b)\le C_G(Q)\le H$, so F2 defines $b^G$. Suppose for contradiction $b^G\ne B$. F1 implies $b$ is not a summand of $\operatorname{Res}_{H\times H}B$. [F1, F2, F6, algebra]

2.1 Set $M=\bigoplus_{HtH\ne H}k[HtH]$. The double-coset decomposition gives $kG=kH\oplus M$ as $H\times H$-modules under F7's double action, and left multiplication by $e$ gives $ekG=b\oplus eM$. This multiplication is an $H\times H$-linear idempotent because $e$ is central in $kH$. Similarly $eB$ is a direct summand of both $B$ restricted and $ekG$. The first conclusion in step 1.1 excludes $b$ from $eB$. By F5 every indecomposable summand of $eB$ must therefore come from $eM$, so $eB$ is a summand of $eM$, hence of $M$.

For an off-identity double coset $HtH$, its permutation module is induced from a point stabilizer. If one of its indecomposable summands had a vertex containing an $(H\times H)$-conjugate of $\Delta Q$, F3's vertex containment would put a conjugate of $\Delta Q$ inside a conjugate point stabilizer. Thus some point $t'\in HtH$ would be fixed by $(a,b)\Delta Q(a,b)^{-1}$ for some $a,b\in H$. The fixed-point equation says that $a^{-1}t'b$ centralizes $Q$. But $a^{-1}t'b$ is still in $HtH$, while $C_G(Q)\le H$; hence $HtH=H$, a contradiction. Therefore no indecomposable summand of $M$, and thus none of $eB$, has a vertex containing an $(H\times H)$-conjugate of $\Delta Q$. [F3, F5, F7, step 1.1, algebra]

3.1 Restrict $eB$ to $\Delta H$. For each of its indecomposable summands with vertex $T$, F3's Mackey decomposition puts every vertex of a restricted indecomposable inside a $\Delta H$-conjugate of $\Delta H\cap xTx^{-1}$ for some $x\in H\times H$. If such a vertex contained a conjugate of $\Delta Q$, then $T$ would contain an $(H\times H)$-conjugate of $\Delta Q$, contrary to step 2.1. Identifying $H$ with $\Delta H$ gives the conjugation action $h:a\mapsto hah^{-1}$ on $eB$. Thus this $kH$-module has no summand whose vertex contains an $H$-conjugate of $Q$. F4 gives the same exclusion for $eB\otimes_k eV$ with diagonal action. [F3, F4, step 2.1, algebra]

4.1 Define $i:eV\to eB\otimes eV$ by $i(v)=ef\otimes v$, and $r:eB\otimes eV\to eV$ by $r(a\otimes v)=av$. The first is $H$-linear because $h(ef)h^{-1}=ef$; the second is $H$-linear because $(hah^{-1})(hv)=h(av)$. Its image lies in $eV$ since $ea=a$. Since $fV=V$ and $ev=v$ on $eV$, their composite is $ri(v)=efv=v$. Hence $eV$ is a summand of this tensor. Also $eU=U$ because $U$ belongs to $b$, so the given splitting of $U$ from the restriction of $V$, after applying $e$, splits $U$ from $eV$. Consequently $U$ is a summand of $eB\otimes eV$. [step 3.1, algebra]

5.1 This contradicts step 3.1, since $U$ has vertex $Q$. Therefore $b^G=B$. If $Q=1$, the centralizer condition forces $H=G$ and the conclusion is the identity block assignment. If $H=G$ directly, the same conclusion holds. The nonzero module $U$ ensures the splittings in step 4.1 cannot be vacuous. All tensor maps and decompositions are finite and require no AC. [step 1.1, step 3.1, step 4.1, algebra] ∎
