---
id: lem-lower-chamber-one-charge-bundles-are-elementary-modifications
kind: lemma
title: Lower-chamber one-charge bundles are elementary modifications
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gromov-Witten invariants of the moduli of bundles on a surface, Section5
      url: https://arxiv.org/abs/math/9910105
---

## Statement

Assume full AC. Let $C$ have genus two, $S=C\times\mathbb{CP}^1$, $p:S\to C$, and $N$ be a degree-one line bundle on $C$. Write $\Sigma=C\times\{z\}$ and $B=\{x\}\times\mathbb{CP}^1$. For $0<\rho<2$, the holomorphic rank-two bundles $E$ of determinant $p^*N$ and $c_2(E)=1$ stable for $H_\rho=\rho\Sigma+B$ are precisely the locally free extensions
$$0\longrightarrow p^*V\longrightarrow E\longrightarrow i_{x*}O_{\mathbb{CP}^1}(-1)\longrightarrow0,$$
where $x\in C$, $V$ is a degree-zero semistable rank-two bundle with $\det V=N(-x)$, and the extension in
$$\operatorname{Ext}^1_S(i_{x*}O(-1),p^*V)=V_x\otimes H^0(\mathbb{CP}^1,O(1))$$
is an invertible two-by-two matrix. The datum $(x,V)$ is uniquely recovered as the jumping fibre and $V=p_*E$. Isomorphisms of extensions, including the automorphisms of strictly semistable $V$, must be retained in the parameter groupoid.

This is an exhaustive holomorphic classification and stability test. It does not assert HYM existence for the whole family or evaluate its absolute ASD invariant. Conversely every irreducible ASD bundle with this determinant and product Kahler polarization gives such a holomorphic bundle, by the integrability and slope identities in the proof.

## Facts & Assumptions

**Given:** Fixed determinant, $c_2=1$, the stated product complex structure and polarization. Full AC is used for the finite-dimensional and sheaf choices. [[def-axiom-of-choice]]

[F1] For a saturated line subbundle of numerical class $a\Sigma+bB$, its rank-one quotient is the determinant-complement line tensored with an ideal sheaf of length $\ell\ge0$. Multiplication of its two line classes gives $c_2=a(1-2b)+\ell$.

## Proof

1.1 **Stability forces the generic ruling restriction to be trivial.** Its determinant on the ruling is trivial, so the generic splitting is $O(a)\oplus O(-a)$ with $a\ge0$. A maximal positive ruling subline extends and saturates on the surface to a line of class $a\Sigma+bB$. If $a\ge1$, [F1] gives $1-a+2ab\ge0$. For $a=1$ this forces $b\ge0$; for $a\ge2$ it forces $b\ge1$. Its slope $a+b\rho$ is at least one, whereas $\mu_{H_\rho}(E)=\rho/2<1$. This contradicts stability. Thus the generic ruling restriction is $O^2$. [F1, given, construct, algebra]

2.1 **The pushforward and its unique jumping fibre are determined.** The sheaf $V=p_*E$ is torsion-free on the smooth curve and hence locally free of rank two. Put $T=R^1p_*E$, a torsion sheaf of length $r$. Fibre integration of $\operatorname{ch}(E)\operatorname{Td}(\mathbb{CP}^1)$ gives $\operatorname{ch}(V)-\operatorname{ch}(T)=2$, since $\operatorname{ch}_2(E)=-1$ and $\deg N=1$. Therefore $\deg V=r$. The evaluation $p^*V\to E$ is an isomorphism on the generic ruling; its determinant is a nonzero section of the degree-$(1-r)$ line $N(\det V)^{-1}$ on $C$. Thus $r\le1$. If $r=1$, this determinant has degree zero and is nowhere zero, making evaluation an isomorphism everywhere and forcing $c_2(E)=0$, a contradiction. Hence $r=0$, $\deg V=0$, and its determinant vanishes on exactly one reduced fibre $f_x$. Locally a matrix with determinant a transverse equation of this fibre has rank one at every point on it: rank zero would put its determinant in the square of the maximal ideal. Its cokernel is consequently a line bundle $O_{f_x}(d)$. Its Chern character is $B+d[\mathrm{pt}]$ because the fibre's normal bundle is trivial. Comparing with $\operatorname{ch}(E)-\operatorname{ch}(p^*V)$ gives $d=-1$. This proves the exact sequence and $\det V=N(-x)$. [given, step 1.1, construct, algebra]

3.1 **The extension group and local-freedom condition are explicit.** Resolve the fibre as a Cartier divisor. The sheaf Hom from its torsion sheaf into a vector bundle is zero, while its first local Ext is $V_x\otimes O_{f_x}(1)$, since the fibre's normal bundle is trivial. Taking global sections gives precisely $V_x\otimes H^0(O(1))$. Locally the extension is represented by a pair of linear forms $(\ell_1,\ell_2)$, and its presentation along the normal coordinate $u$ has relation column $(\ell_1,\ell_2,u)$. Its middle sheaf is locally free exactly when these three entries never vanish simultaneously. On the fibre this is the absence of a common zero of the two forms, equivalently their linear independence. Thus their coefficient matrix is invertible. Restricting to the jumping fibre yields its splitting $O(1)\oplus O(-1)$. This construction works for strictly semistable $V$ as well; quotienting only by scalar automorphisms would incorrectly alter that locus. [step 2.1, construct, algebra]

4.1 **Semistability of $V$ is necessary and sufficient.** If $V$ has a line of degree $b\ge1$, its pullback injects into $E$ and has slope $b\rho>\rho/2$, contradicting stability. Thus $V$ is semistable. Conversely take an invertible extension from semistable $V$ and a saturated line in $E$ of class $a\Sigma+bB$. The generic ruling is trivial, so $a\le0$. If $b\le0$, its slope is nonpositive and cannot destabilize. If $a=0,b\ge1$, pushing its inclusion to $C$ gives a line of positive degree in $V$, impossible. Finally suppose $a\le-1,b\ge1$. Formula [F1] gives $1+a(2b-1)\ge0$, so necessarily $a=-1,b=1$. Its slope is $-1+\rho<\rho/2$ for $\rho<2$. These exhaust all cases and prove stability. Hence the extension construction is an equivalence of the stated bundle groupoids, not just a dominant parameter family. [F1, step 2.1, step 3.1, algebra]

5.1 **The analytic and enumerative boundary is retained.** An ASD unitary connection on this Kahler surface has $F^{0,2}=0$ and scalar central contraction, so it induces a holomorphic structure. For any holomorphic line, decomposing the connection into its line connection and second fundamental form gives its slope deficit as a positive constant times the squared norm of that second fundamental form. Irreducibility makes the inequality strict. Thus every actual irreducible ASD connection in this chamber has just been classified. The reverse direction would require producing a HYM metric for every stable elementary modification, including uniform control at the strictly semistable $V$ locus and its compactification. This proof has not constructed that metric or the universal-incidence integral on the resulting compactified moduli. Those are the actual remaining steps for the absolute lower-chamber marked count; neither the groupoid classification nor the known wall difference supplies its value. [given, step 1.1, step 2.1, step 3.1, step 4.1, construct]
