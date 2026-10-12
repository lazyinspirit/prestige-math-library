---
id: ex-q-schaper-for-shape-three-two-at-e-two
kind: example
title: "The q-Schaper calculation for (3,2) at e = 2"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular, def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-type-a-hecke-specht-module-and-cell-form, thm-q-schaper-virtual-radical-layer-formula]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Examples 5.28 and 5.33, printed pp. 54-60: the Gram determinant of (3,2), the q-Schaper sums at e=2 and the concluding dimension count for d_{(3,2),(2^2,1)}"
---

## Example

Take $R=\mathbb C[\hat q]$, the prime element $\pi=1+\hat q$ (so that
$F=\mathbb C$ and $q:=\hat q+\pi R$ specialises to $-1$, giving $e=2$), and
$\lambda=(3,2)$, $n=5$. Evaluating the q-Schaper virtual sums
([[thm-q-schaper-virtual-radical-layer-formula]]) with the hook valuations
$\nu_\pi([2]_{\hat q})=\nu_\pi([4]_{\hat q})=1$,
$\nu_\pi([3]_{\hat q})=\nu_\pi([1]_{\hat q})=0$ gives, in the source's
normalisation,
$$\sum_{i>0}\bigl[W^{(3,2)}_F(i)\bigr]=\bigl[W^{(3,1^2)}_F\bigr]+\bigl[W^{(2^2,1)}_F\bigr]-\bigl[W^{(1^5)}_F\bigr],\qquad \sum_{i>0}\bigl[S^{(3,2)}_F(i)\bigr]=2\bigl[D^{(2^2,1)}_{\mathrm{M}}\bigr].$$
Further Jantzen calculations give $W^{(1^5)}_F=L^{(1^5)}_F$,
$W^{(2^2,1)}_F=L^{(2^2,1)}_F$ and
$W^{(3,1^2)}_F\sim L^{(3,1^2)}_F+L^{(2^2,1)}_F+L^{(1^5)}_F$, so at the level of
the sum formula alone one gets $d_{(3,2),(3,1^2)}=1$ and only the bound
$d_{(3,2),(2^2,1)}\in\{1,2\}$. The extra dimension/filtration argument on the
Specht side gives
$S^{(3,2)}_{\mathrm{M}}\cong D^{(2^2,1)}_{\mathrm{M}}$ (both sides have
dimension $5$), whence $d_{(3,2),(2^2,1)}=1$: the virtual sum alone did not
determine the entry. Translated to the Dipper-James convention of this page by
conjugating and applying the same $\theta$ pullback to both modules
([[def-type-a-hecke-specht-module-and-cell-form]]), this reads
$S^{(2,2,1)}_{\mathrm{DJ}}\cong D^{(3,2)}_{\mathrm{DJ}}$, while the partition
$(2,2,1)$ is not $2$-regular, so its own labelled head vanishes,
$D^{(2,2,1)}_{\mathrm{DJ}}=0$. The computed entry is consistent with the
dominance bound $d_{\lambda\mu}\ne0\Rightarrow\mu\unrhd\lambda$ of
[[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]].

## Facts & Assumptions

**Given:** The ring $R=\mathbb C[\hat q]$, the prime $\pi=1+\hat q$, the residue field $F=\mathbb C$ with $q=-1$ and quantum characteristic $e=2$, and the partition $\lambda=(3,2)$ with its virtual Weyl and Specht symbols ([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]], [[thm-q-schaper-virtual-radical-layer-formula]]).

[F1] ([[thm-q-schaper-virtual-radical-layer-formula]]) The q-Schaper virtual sums express $\sum_{i>0}[W^{\lambda}_F(i)]$ and $\sum_{i>0}[S^{\lambda}_F(i)]$ as virtual combinations of Weyl and Specht symbols with coefficients $\nu_\pi([h_{ab}]_{\hat q})-\nu_\pi([h_{ac}]_{\hat q})$.

[F2] Hook valuations: $[2]_{\hat q}=1+\hat q=\pi$ and $[4]_{\hat q}=(1+\hat q)(1+\hat q^2)$, so $\nu_\pi([2]_{\hat q})=\nu_\pi([4]_{\hat q})=1$; $[1]_{\hat q}=1$ and $[3]_{\hat q}=1+\hat q+\hat q^2$ does not vanish at $\hat q=-1$ (it equals $1$ there), so $\nu_\pi([1]_{\hat q})=\nu_\pi([3]_{\hat q})=0$.

[F3] ([[def-type-a-hecke-specht-module-and-cell-form]]) The page's convention is obtained from the source's by conjugating the label and applying the same $\theta$ pullback to both modules of a comparison.

[F4] ([[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]]) A nonzero decomposition number $d_{\lambda\mu}$ requires $\mu\unrhd\lambda$.




## Verification

1.1 Hook valuations: with $\pi=1+\hat q$ the identities $[2]_{\hat q}=\pi$ and $[4]_{\hat q}=(1+\hat q)(1+\hat q^2)=\pi(1+\hat q^2)$ show $\nu_\pi([2]_{\hat q})=\nu_\pi([4]_{\hat q})=1$, since $\pi\nmid(1+\hat q^2)$; and $[1]_{\hat q}=1$, $[3]_{\hat q}\big|_{\hat q=-1}=1\ne0$ show $\nu_\pi([1]_{\hat q})=\nu_\pi([3]_{\hat q})=0$. [given, F2]

2.1 Virtual sums: the hook lengths of $(3,2)$ are $4,3,2,1$ in the first row and $1$ in the second; substituting the valuations of step 1.1 into the q-Schaper formula of [F1] produces, for the Weyl side, the virtual combination $[W^{(3,1^2)}_F]+[W^{(2^2,1)}_F]-[W^{(1^5)}_F]$ and, on the Specht side, the single class $2[D^{(2^2,1)}_{\mathrm{M}}]$ (the source's worked examples, see the locator above). [step 1.1, F1]

3.1 Consequence for the entry: the small-module determinations $W^{(1^5)}_F=L^{(1^5)}_F$, $W^{(2^2,1)}_F=L^{(2^2,1)}_F$ and $W^{(3,1^2)}_F\sim L^{(3,1^2)}_F+L^{(2^2,1)}_F+L^{(1^5)}_F$ turn the Weyl virtual sum into the statements $d_{(3,2),(3,1^2)}=1$ and $d_{(3,2),(2^2,1)}\in\{1,2\}$; since the Specht-side class is $2[D^{(2^2,1)}_{\mathrm{M}}]$, the extra dimension count $S^{(3,2)}_{\mathrm{M}}\cong D^{(2^2,1)}_{\mathrm{M}}$ with both dimensions equal to $5$ pins the entry to $d_{(3,2),(2^2,1)}=1$. [step 2.1, F1]

4.1 Translation and consistency: applying the conjugation and the $\theta$ pullback of [F3] to both sides gives $S^{(2,2,1)}_{\mathrm{DJ}}\cong D^{(3,2)}_{\mathrm{DJ}}$ and forces $D^{(2,2,1)}_{\mathrm{DJ}}=0$, since $(2,2,1)$ is not $2$-regular; the label pair $(\lambda,\mu)=((2,2,1),(3,2))$ has $(3,2)\unrhd(2,2,1)$ (prefix sums $3\ge2$, $5\ge4$), consistent with the dominance bound of [F4]. [step 3.1, F3, F4] ∎
