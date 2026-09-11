---
id: "thm-mayer-vietoris-sequence-in-real-singular-cohomology"
kind: "theorem"
title: "Mayer vietoris sequence in real singular cohomology"
deps: ["thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence", "thm-cover-small-inclusion-is-a-chain-homotopy-equivalence", "thm-long-exact-sequence-in-cohomology", "thm-mayer-vietoris-sequence-in-singular-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 10; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an ordered open cover $X=U\cup V$, there is a long exact sequence of real vector spaces
$$\cdots\to H^k_{\mathrm{sing}}(X;\mathbb R)\xrightarrow{\alpha}H^k_{\mathrm{sing}}(U;\mathbb R)\oplus H^k_{\mathrm{sing}}(V;\mathbb R)\xrightarrow{\beta}H^k_{\mathrm{sing}}(U\cap V;\mathbb R)\xrightarrow{\Delta}H^{k+1}_{\mathrm{sing}}(X;\mathbb R)\to\cdots.$$
Here $\alpha$ is restriction to both opens and $\beta(u,v)=v|-u|$. With the same real coefficient identifications, $\Delta$ is the negative of the AT connector for the $U-V$ convention. The sequence begins with $0\to H^0(X;\mathbb R)$; all negative groups vanish.

## Facts & Assumptions

**Given:** The ordered open cover, and the notation $D=C_{\mathrm{sm}}^\bullet$, $E=C^\bullet(U)\oplus C^\bullet(V)$, $F=C^\bullet(U\cap V)$.

[F1] There is a cochain short exact sequence $0\to D\xrightarrow{a}E\xrightarrow{b}F\to0$ with $b(u,v)=v|-u|$ ([[thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence]]).

[F2] The cover-small inclusion $I$ is a chain homotopy equivalence ([[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]]).

[F3] A cochain short exact sequence has its long exact cohomology sequence ([[thm-long-exact-sequence-in-cohomology]]).

[F4] AT's singular cohomology sequence has overlap map $u|-v|$ and the positive lift-differential connector ([[thm-mayer-vietoris-sequence-in-singular-cohomology]]).

## Proof

1.1 Let $r$ be the inverse chain map supplied by [F2], with $rI=1$ and $1-Ir=\partial T+T\partial$. Precomposition gives $I^*:C^\bullet(X)\to D$ and $r^*:D\to C^\bullet(X)$. Then $I^*r^*=1$ and $1-r^*I^*=\delta K+K\delta$, where $K^k\varphi=\varphi T_{k-1}$ and $K^k=0$ for $k\le0$. Indeed evaluation on any degree-$k$ chain turns this equality into the displayed chain identity. Consequently $\theta=H(I^*)$ is an isomorphism with inverse $H(r^*)$. [F1, F2, algebra]

2.1 For a cocycle $c\in F^k$, take a lift $e\in E^k$ with $be=c$. Then $b\delta e=0$, so $\delta e=a(d)$ for a unique $d\in D^{k+1}$. Since $a$ is injective, $a\delta d=\delta^2e=0$ implies $\delta d=0$. Changing $e$ by $a(t)$ changes $d$ by $\delta t$; changing $c$ by $\delta c_0$ and lifting $c_0$ to $e_0$ allows replacement of $e$ by $e+\delta e_0$, leaving $d$ unchanged. Thus $\Delta[c]=\theta^{-1}[d]$ is well-defined and linear, because lifts add and scale. This is the lift-differential convention of [F3] and [F4]. [F1, F3, F4, step 1.1, algebra]

3.1 Apply [F3] to [F1]. The finite direct sum has cohomology $H(E)=H(U)\oplus H(V)$: cycles and boundaries are componentwise, with just two primitives for a boundary pair. Replace $H(D)$ by $H(X)$ via $\theta$. Since $aI^*$ restricts a full cochain to $U$ and $V$, the first map is the actual $\alpha$; the second is the displayed $\beta$, and the connector is step 2.1. This proves exactness throughout. At degree zero the preceding groups are zero, giving initial injectivity. [F1, F3, step 1.1, step 2.1]

3.2 For the sign comparison, the AT row and this row have the same $D,E,a$, whereas $b=-b_{\mathrm{AT}}$. If $e$ lifts $c$ in the AT row, then $-e$ lifts $c$ in this row and its differential is $-a(d)$. Therefore $\Delta=-\Delta_{\mathrm{AT}}$ under the same $\theta$. Equivalently the row comparison is identity on $D,E$ and minus identity on $F$. [F1, F4, step 2.1, algebra]

4.1 If an open set is empty, restriction to the other is an identity and the overlap terms vanish. If $U=V=X$, $\alpha$ is diagonal, $\beta(u,v)=v-u$, and the cochain lift $c\mapsto(0,c)$ makes the connector zero. This covers one-point and empty spaces. Degree zero and all negative degrees were handled in steps 1.1 and 3.1; degenerate simplices are included in the supplied chain equivalence. The inverse uses least subdivision depths in [F2], and the lifts in [F1] are canonical zero extensions, so no AC is introduced. [F1, F2, step 1.1, step 2.1, step 3.1, step 3.2] ∎
