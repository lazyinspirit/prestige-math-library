---
id: ex-ising-periodic-path-space-and-two-sector-map
kind: example
title: "Ising periodic paths split into two spin-chain sectors"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-anyonic-fusion-path-space, lem-anyonic-fusion-path-basis, thm-anyonic-path-space-is-hilbert-under-unitarity, def-anyonic-local-channel-projector, lem-ising-unitary-normal-data-and-ribbon-coherence, lem-ell-four-root-ising-gauge-and-chirality-conversion, thm-ising-periodic-two-sector-and-line-representation, def-qc-tqc-unitary-fusion-category]
justified_by: []
proof_strategy: direct
axiom_use: None; the path count and basis map are finite and explicit.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§§3.4.1–3.4.2, PDF pp. 34–38: periodic anyonic paths and the two Ising sectors."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§IV.A, PDF p. 37: Ising fusion rules, the three-σ F-block, and exchange phases."
verification:
  precheck: pass
---

## Example

Use the actual coherent positive-FS Ising category constructed in [[lem-ising-unitary-normal-data-and-ribbon-coherence]] at $\kappa=1$, $s=e^{\pi i/8}$ and $\beta=s$. Its simple objects are $\mathbf1,\eta,D$, with $\eta^2=\mathbf1$, $\eta D=D\eta=D$ and $D^2=\mathbf1\oplus\eta$. In the inverse-pullback convention its complete data include
$$F_D^{DDD}=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\quad R_{DD}^0=s^{-1},\quad R_{DD}^\eta=i s^{-1},\quad R_{\eta D}^D=R_{D\eta}^D=-i,\quad R_{\eta\eta}^0=-1.$$
The remaining unit entries are one. Its twist is $\theta_D=s^{-1}$, positive dimension $\sqrt2$ and FS sign $+1$. This follows from the ell-four root category by the explicit associator/braiding parity conversion, rather than a vertex gauge; the original root category has negative FS and twist $s^3$.

For reference charge $D$, the full periodic path space is zero at odd length. At length $L=2N$, $N\ge1$, it is $H\oplus\bar H$, each sector of dimension $2^N$, with no total-flux or spin-parity restriction. Encode the group labels by bits, in even positions of $H$ and odd positions of $\bar H$. Under these orthonormal basis maps,
$$P_{2j-1}|_H=(I+X_j)/2,\quad P_{2j}|_H=(I+Z_jZ_{j+1})/2,$$
$$P_{2j-1}|_{\bar H}=(I+Z_jZ_{j+1})/2,\quad P_{2j}|_{\bar H}=(I+X_{j+1})/2.$$
Indices are cyclic modulo $N$. Put $C|b_1\cdots b_N\rangle=|b_2\cdots b_Nb_1\rangle$, $Q=\prod_jX_j$, and $K_{c,b}=2^{-N/2}(-1)^{\sum_jc_j(b_{j-1}+b_j)}$. The actual one-step shift and cyclic F-contracted line maps are
$$T=\begin{pmatrix}0&C\\I&0\end{pmatrix},\quad Y_\eta=\operatorname{diag}(Q,Q),\quad Y_D=\begin{pmatrix}0&K^\dagger\\K&0\end{pmatrix}.$$
They intertwine all displayed projectors, including wraparound; each line commutes with $T$ and the projectors, and $Y_D^2=I+Y_\eta$. The corresponding single-chain map instead satisfies $(K/\sqrt2)^2=(I+Q)C^{-1}/2$. At $N=1$ the bond projector is $I$ and the field projector is $(I+X_1)/2$; no three-distinct-site cyclic TL relation is asserted for length two.

## Facts & Assumptions

**Given:** The displayed positive-FS category, its orthonormal fusion vertices, reference charge $D$ and positive periodic length.

[F1] [[lem-ising-unitary-normal-data-and-ribbon-coherence]] constructs all-label F/R data, both pentagon and hexagon identities, the positive unitary pivot and the twists for both FS signs.

[F2] [[lem-ell-four-root-ising-gauge-and-chirality-conversion]] supplies the full ell-four root gauge and the precise parity conversion to $\kappa=1$, $\beta=s$, including the inverse-pullback orientation.

[F3] [[thm-ising-periodic-two-sector-and-line-representation]] supplies the complete periodic basis identifications, all projectors and cyclic line contractions, their wraparound, rank and Fourier identities for every $N\ge1$.

[F4] [[def-anyonic-fusion-path-space]] specifies the typed path coordinates, and [[def-anyonic-local-channel-projector]] specifies F-conjugated channel projections.

## Verification

**Proof technique:** instantiate the complete coherent category and the full periodic representation, keeping their chirality and both sectors explicit.

1.1 Take $\kappa=1$ and $\beta=s$. Since $s^2=(1+i)/\sqrt2$, the normal-data condition $\beta^2=\kappa(1+i)/\sqrt2$ holds. Thus [F1] gives an actual coherent unitary category, not just a single sector matrix. Its full pullback R table and positive-FS Hadamard block are exactly the displayed entries, and its curl is $\theta_D=\kappa/\beta=s^{-1}$. [F1, given, algebra]

2.1 The ell-four root supplier has FS $-1$ and twist $s^3$. Apply [F2]'s parity associator $(-1)^{|a||b||c|}$ and odd-odd crossing factor $-i$, reversing the odd evaluation as specified there. This produces the category of step 1.1. It proves the exact relationship to the root construction without identifying distinct pivotal or chirality conventions. [F2, step 1.1, algebra]

2.2 Fusion forces alternation between $D$ and a group label. Odd length is therefore impossible. For $2N$, choose the $N$ group labels independently in each of the two parity patterns, yielding both orthonormal bit bases and dimension $2^{N+1}$. Apply [F3] to the local projections specified by [F4]: the Hadamard vacuum conjugate is $(I+X)/2$, while a group-group endpoint pair has vacuum channel exactly when its bits agree, giving $(I+ZZ)/2$. These prove all four displayed projector formulas at every cyclic index. [F3, F4, step 1.1, algebra]

3.1 With the displayed order $H\oplus\bar H$, the path shift sends $H$ to $\bar H$ without changing the bits and sends $\bar H$ to $H$ by $C$. Therefore it is the displayed block matrix and $T^2=\operatorname{diag}(C,C)$. [F3]'s complete cyclic F contraction at $\kappa=1$ gives exactly the displayed $Y_\eta,Y_D$, not an inferred fusion-only representation. Its Fourier identities $K^\dagger K=KK^\dagger=I+Q$, $KQ=QK=K$ and $K^\dagger=CK=KC$ prove the line fusion relations, commutation with all projectors and $T$, and the stated distinct single-chain square. Consequently any Hamiltonian formed from these specified projectors commutes with these line maps. [F3, step 2.2, algebra]

4.1 For $N=1$, the cyclic bond is $(I+Z_1^2)/2=I$, the field remains $(I+X_1)/2$, and both two-dimensional sectors remain present. Thus the wraparound formulas include the smallest length without adding an inapplicable three-site relation or projecting away either sector. [F3, step 3.1, algebra] ∎

## Remarks

The earlier three-$D$/total-$D$ Ising worked block is not a logical coherence supplier. The three A-homed results used here construct and compare the complete categories and evaluate the complete periodic representation. The displayed inverse-pullback phases have twist $e^{-\pi i/8}$; reversing braiding and twist is a separate operation if the opposite physical chirality is desired.
