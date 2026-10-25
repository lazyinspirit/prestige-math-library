---
id: ex-gershgorin-disks-and-spectrum
kind: example
title: "Gershgorin disks for an explicit 3x3 matrix contain the true spectrum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gershgorin-disk-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For

$$A=\begin{pmatrix}2&1&0\\0&3&1\\0&0&4\end{pmatrix},$$

the Gershgorin disks are

$$D_1=\{z:|z-2|\le1\},\qquad D_2=\{z:|z-3|\le1\},\qquad D_3=\{4\},$$

and they contain the whole spectrum $\{2,3,4\}$.

## Facts & Assumptions

**Given:** The upper-triangular matrix $A$ above.

[L1] Every eigenvalue lies in some Gershgorin disk ([[thm-gershgorin-disk-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The row sums off the diagonal are $1,1,0$, so the displayed three Gershgorin disks are exactly the ones attached to $A$. [algebra]

2.1 Because $A$ is upper triangular, its eigenvalues are the diagonal entries $2,3,4$, and each of these lies in the displayed union of disks. This is the concrete containment asserted abstractly by [L1]. [L1, step 1.1] ∎

## Remarks

The shaded closed disks below have centers $2$ and $3$ and radius $1$; the third disk $D_3$ is the single point $4$. The black dots mark the eigenvalues $2,3,4$, with $4$ also on the boundary of $D_2$.

```tikz
\begin{tikzpicture}[scale=1.35]
\fill[blue!15] (2,0) circle (1);
\fill[red!15] (3,0) circle (1);
\draw[blue,thick] (2,0) circle (1);
\draw[red,thick] (3,0) circle (1);
\draw[->] (-0.25,0) -- (4.9,0) node[right] {$\mathrm{Re}\,z$};
\draw[->] (0,-1.3) -- (0,1.4) node[above] {$\mathrm{Im}\,z$};
\node[below left] at (0,0) {$0$};
\node[blue] at (1.45,1.1) {$D_1$};
\node[red] at (3.55,1.1) {$D_2$};
\fill (2,0) circle (1.8pt) node[below=5pt] {$2$};
\fill (3,0) circle (1.8pt) node[below=5pt] {$3$};
\fill (4,0) circle (1.8pt) node[below=5pt] {$4$};
\draw[->] (4.4,0.65) node[above] {$D_3=\{4\}$} -- (4.04,0.06);
\end{tikzpicture}
```
