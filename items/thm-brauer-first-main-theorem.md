---
id: thm-brauer-first-main-theorem
kind: theorem
title: Brauer's First Main Theorem
deps: ["lem-first-main-theorem-local-block-existence", "lem-first-main-theorem-injectivity", "lem-first-main-theorem-surjectivity"]
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
    - title: Martínez, Representation Theory of Finite Groups, Theorem 4.10, pp. 27–28
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
    - title: Craven, The Brauer Correspondence, Theorem 1.12, pp. 9–10
      url: https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $D$ be a fixed $p$-subgroup of finite $G$, let $N=N_G(D)$, and use a splitting $p$-modular residue field $k$. Block induction is a bijection
$$\{b\text{ a block of }kN:D\text{ is a defect group of }b\}\longrightarrow\{B\text{ a block of }kG:D\text{ is a defect group of }B\},\qquad b\longmapsto b^G.$$
The sets may be empty. The bijection commutes with $G$-conjugation of $D$ and requires no AC.

## Facts & Assumptions

**Given:** The stated finite group, field and actual subgroup $D$.

[F1] [[lem-first-main-theorem-local-block-existence]] gives a local defect-$D$ inducing block for every global defect-$D$ block.

[F2] [[lem-first-main-theorem-injectivity]] gives injectivity.

[F3] [[lem-first-main-theorem-surjectivity]] gives definedness for every local input and preserves the exact defect group.

## Proof

1.1 F3 makes the displayed assignment a function with the stated codomain. F2 makes it injective, and F1 makes it onto. These are precisely the two bijection conditions, including if either set is empty: F1 and F3 then force the other to be empty as well. [F1, F2, F3, algebra]

2.1 For $g\in G$, conjugation carries $N_G(D)$ to $N_G(gDg^{-1})$, sends a block ideal to the conjugate ideal, and transports the double-group action and every split inclusion/retraction by the algebra isomorphism $x\mapsto gxg^{-1}$. A diagonal vertex $\Delta D$ is carried to $\Delta(gDg^{-1})$, since relative induction splittings and subgroup minimality are transported in both directions. Thus conjugating the summand condition defining $b^G$ gives $({}^g b)^G={}^g(b^G)$ by uniqueness. If $N=G$, restriction to the same double group is identity and each block is its own unique inducing block, so the bijection is identity. In particular $D=1$ gives the identity on defect-zero blocks. This proves equivariance and all boundaries; no preferred representative of a conjugacy class is chosen. F1–F3 are choice-free and the present maps are explicit, so no AC is required. [F1, F2, F3, step 1.1, algebra] ∎
