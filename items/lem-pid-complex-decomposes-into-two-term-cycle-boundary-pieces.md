---
id: lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces
kind: lemma
title: "A free PID complex decomposes into two-term cycle-boundary pieces"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid, lem-pid-submodules-of-free-modules-are-free-with-choice, thm-free-modules-are-projective-with-choice-boundary]
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
    - title: "tom Dieck, Algebraic Topology, proof of Theorem 11.10.1, printed pp.298–299"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
    - title: "Friedman, Singular Intersection Homology, §6.4.5, (6.11), printed p.315 and Remark 6.4.18, p.318"
      url: https://faculty.tcu.edu/gfriedman/ihbook.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $C$ a nonnegative chain complex of free $R$-modules of arbitrary rank. Set $Z_nC=\ker d_n$, $B_nC=\operatorname{im}d_{n+1}$, and $B_{-1}C=0$. Cycles and boundaries are free. There are sections $s_n:B_{n-1}C\to C_n$ of the differential corestricted to its image, giving
$$C_n\cong Z_nC\oplus B_{n-1}C,\qquad c\longmapsto(c-s_n(d_nc),d_nc).$$
In these coordinates the differential is $(z,b)\mapsto(b,0)$, with $b$ included in $Z_{n-1}C$. Consequently $C$ is isomorphic to the direct sum of the two-term free complexes $B_pC\hookrightarrow Z_pC$ in degrees $p+1,p$.

Let $Z(C)_n=Z_nC$ and $A(C)_n=B_{n-1}C$, both with zero differential. There is a canonical degreewise split short exact sequence of complexes
$$0\longrightarrow Z(C)\xrightarrow{\iota}C\xrightarrow{\rho}A(C)\longrightarrow0,\qquad \rho_n=d_n:C_n\to B_{n-1}C.$$
The same assertions apply to any such complex $D$. No splitting of $B_pC\hookrightarrow Z_pC$ is asserted.

## Facts & Assumptions

**Given:** $R,C$ and AC as in the statement; negative terms are zero.

[F1] The cycle-boundary short exact sequences are $0\to Z_nC\to C_n\to B_{n-1}C\to0$ and $0\to B_nC\to Z_nC\to H_nC\to0$: [[lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]].

[F2] Under AC, submodules of arbitrary free PID modules are free: [[lem-pid-submodules-of-free-modules-are-free-with-choice]].

[F3] Under AC, free modules lift maps through surjections: [[thm-free-modules-are-projective-with-choice-boundary]].

[F4] Nonempty families of choices can be selected simultaneously under AC: [[def-axiom-of-choice]].

## Proof

1.1 Both $Z_nC$ and $B_nC$ are submodules of the free module $C_n$, the latter lying in the former since $d_nd_{n+1}=0$. Apply the local submodule lemma to get their freeness for every $n$. Thus the second sequence in [F1] is a length-one free presentation of $H_nC$. [F1, F2, given]

2.1 The surjection $d_n:C_n\twoheadrightarrow B_{n-1}C$ admits a lift of the identity of its free target, hence a section $s_n$. For each $n$ the set of such sections is nonempty; AC selects one for every degree. At $n=0$, take the unique map $s_0:0\to C_0$. [step 1.1, F1, F3, F4]

3.1 Define $u_n(z,b)=z+s_n(b)$ and $v_n(c)=(c-s_n(d_nc),d_nc)$. The first component of $v_n(c)$ is a cycle because its differential is $d_nc-d_ns_n(d_nc)=0$. Both maps are linear. Substitution gives $u_nv_n(c)=c$ and $v_nu_n(z,b)=(z,b)$, since $d_nz=0$ and $d_ns_n(b)=b$. Thus they are inverse isomorphisms. [step 2.1, F1]

4.1 Compute $d_nu_n(z,b)=b$. Since $d_{n-1}b=0$, its image under $v_{n-1}$ is $(b,0)$. For each $p$ let $E^{(p)}$ have $B_pC$ in degree $p+1$, $Z_pC$ in degree $p$, and differential the inclusion. In degree $n$, $\bigoplus_{p\geq0}E^{(p)}$ is $Z_nC\oplus B_{n-1}C$ with precisely the differential just computed. The maps $u_n$ therefore form the claimed chain isomorphism. Only two summands occur in each degree. [step 3.1, F1]

5.1 Inclusion $\iota$ is a chain map because $d_n$ kills $Z_nC$. The map $\rho$ is a chain map to the zero-differential complex $A(C)$ because $\rho_{n-1}d_n=d_{n-1}d_n=0$. Its kernel and image in degree $n$ are $Z_nC$ and $B_{n-1}C$, respectively. This proves the canonical short exact sequence, and the selected $s_n$ prove degreewise splitting. Those sections need not be chain maps: $d_ns_n(b)=b$ can be nonzero. All formulas hold for the zero complex and for degree zero; replacing $C$ throughout by $D$ proves the stated second application. [step 2.1, step 4.1, F1] ∎
