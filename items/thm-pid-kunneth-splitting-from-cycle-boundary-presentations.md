---
id: thm-pid-kunneth-splitting-from-cycle-boundary-presentations
kind: theorem
title: "The PID Kunneth sequence admits a section after choices"
status: published
origin: pipeline
landmark: true
deps: [def-axiom-of-choice, thm-pid-kunneth-exactness-from-cycle-boundary-presentations, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, thm-a-chain-map-induces-a-well-defined-map-on-homology, def-tensor-product-total-complex-of-chain-complexes]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "tom Dieck, Algebraic Topology, final paragraph of proof of Theorem 11.10.1, printed p.299"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
    - title: "Friedman, Singular Intersection Homology, §6.4.5, Splitting, printed p.318"
      url: https://faculty.tcu.edu/gfriedman/ihbook.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $C,D$ nonnegative complexes of arbitrary-rank free $R$-modules, with direct-sum tensor totalization and Koszul differential. For every $n\geq0$, the Tor quotient $\beta_n$ in the natural PID Kunneth sequence admits an $R$-linear section
$$s_n:\bigoplus_{p+q=n-1}\operatorname{Tor}_1^R(H_pC,H_qD)\longrightarrow H_n(C\otimes_RD),\qquad \beta_ns_n=1.$$
Specifically, chosen degreewise cycle retractions determine a retraction $r_n$ of the cross product $\alpha_n$, and a section satisfying $s_n\beta_n=1-\alpha_nr_n$. This asserts existence after choices, with no claim of a natural choice of section.

## Facts & Assumptions

**Given:** The ring, complexes and AC in the statement. All sums are on nonnegative finite diagonals and empty sums are zero.

[F1] The natural sequence $0\to K_n\xrightarrow{\alpha_n}H_n(C\otimes D)\xrightarrow{\beta_n}Q_n\to0$ is exact, where $K_n=\bigoplus_{p+q=n}H_pC\otimes H_qD$ and $Q_n=\bigoplus_{p+q=n-1}\operatorname{Tor}_1(H_pC,H_qD)$: [[thm-pid-kunneth-exactness-from-cycle-boundary-presentations]].

[F2] Under AC, sections of $C_p\twoheadrightarrow B_{p-1}C$ give cycle retractions $c\mapsto c-s_p(d_Cc)$; the same holds for $D$: [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]].

[F3] Chain maps induce well-defined homology maps: [[thm-a-chain-map-induces-a-well-defined-map-on-homology]].

[F4] AC permits the simultaneous degreewise choices: [[def-axiom-of-choice]].

[F5] The tensor differential is the Koszul differential: [[def-tensor-product-total-complex-of-chain-complexes]].

## Proof

1.1 Select the sections of [F2] for both complexes, using [F4], and denote the resulting cycle retractions by $a_p:C_p\to Z_pC$ and $b_q:D_q\to Z_qD$. Define $\pi_{C,p}(c)=[a_p(c)]\in H_pC$ and $\pi_{D,q}(w)=[b_q(w)]\in H_qD$. Since a boundary is a cycle, $a_{p-1}(d_Cc)=d_Cc$, whose homology class is zero. Thus $\pi_Cd_C=0$; likewise $\pi_Dd_D=0$. With zero differentials on $H(C)$ and $H(D)$, these are chain maps. [F2, F4]

2.1 Define $\Pi:C\otimes D\to H(C)\otimes H(D)$ by $c\otimes w\mapsto\pi_C(c)\otimes\pi_D(w)$. This descends to tensors because the formula is bilinear and balanced: replacing $rc\otimes w$ by $c\otimes rw$ gives the same tensor by linearity of $\pi_C,\pi_D$. On a homogeneous tensor, $\Pi d(c\otimes w)=\pi_C(d_Cc)\otimes\pi_D(w)+(-1)^p\pi_C(c)\otimes\pi_D(d_Dw)=0$. The target differential is zero, so $\Pi$ is a chain map. [step 1.1, F5]

3.1 The target has zero differential, hence its degree-$n$ homology is exactly $K_n$, even if its modules are not free. By [F3], $\Pi$ induces $r_n:H_n(C\otimes D)\to K_n$. For cycles $z,w$ the retractions fix them, so $r_n\alpha_n([z]\otimes[w])=[z]\otimes[w]$. Elementary tensors of homology classes generate $K_n$, proving $r_n\alpha_n=1_{K_n}$. [step 1.1, step 2.1, F1, F3]

4.1 Put $L=\ker r_n$. If $x\in L$ and $\beta_nx=0$, exactness gives $x=\alpha_nk$ for some $k\in K_n$. Applying $r_n$ gives $0=r_nx=k$, so $x=0$. Therefore $\beta_n|_L:L\to Q_n$ is injective. [F1, step 3.1]

5.1 Given $q\in Q_n$, surjectivity of $\beta_n$ supplies $x$ with $\beta_nx=q$. Set $x'=x-\alpha_nr_nx$. Then $r_nx'=r_nx-r_nx=0$ and $\beta_nx'=q$, since $\beta_n\alpha_n=0$. Thus $\beta_n|_L$ is surjective. Its inverse $s_n:Q_n\to L\subseteq H_n(C\otimes D)$ is linear: sums and scalar multiples of inverse images are inverse images of the corresponding sums and scalar multiples, and uniqueness identifies them. This inverse needs no further selection of representatives. [F1, step 3.1, step 4.1]

6.1 By definition $\beta_ns_n(q)=q$. For any $x\in H_n(C\otimes D)$, the element $x-\alpha_nr_nx$ lies in $L$ and maps to $\beta_nx$, so uniqueness gives $s_n\beta_nx=x-\alpha_nr_nx$. Hence both asserted composites hold. The maps $(k,q)\mapsto\alpha_nk+s_nq$ and $x\mapsto(r_nx,\beta_nx)$ are inverse: use these two identities, $r_n\alpha_n=1$, $r_ns_n=0$, and $\beta_n\alpha_n=0$. [step 3.1, step 5.1, F1]

7.1 For $n=0$, $Q_n=0$, the section is the unique zero-domain map, and $\alpha_nr_n=1$ follows from step 6.1. The same proof handles a zero complex or a zero $K_n$ or $Q_n$, including degree one. The choice of $a_p,b_q$ occurs in $r_n$ and therefore in $s_n$; no compatibility of those choices with arbitrary chain maps was imposed. This proves the stated existence without asserting naturality of the chosen section. [step 1.1, step 6.1, F1] ∎
