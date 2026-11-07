---
id: thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion
kind: theorem
title: "Finite generation and torsion of the cyclotomic class-group Iwasawa module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-cyclotomic-iwasawa-class-group-module
  - lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels
  - thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
  - lem-weierstrass-division-for-p-adic-power-series
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC are inherited through the supplied class-field/inertia-tower and inverse-limit compactness interfaces. No full torsion-module structure theorem or ordinary-coinvariant bounded-order control theorem is assumed.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Proposition 3.2.11 and proof, §3.2, printed pp. 80–81"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC through the named class-field interfaces. Let $K$ be a totally real number field and let $p$ be any prime. Write $\mathbb Q(\mu_{p^\infty})=\bigcup_{m\ge1}\mathbb Q(\mu_{p^m})$. For odd $p$, let $\mathbb Q_{\mathrm{cyc},p}$ be the unique subextension of this cyclotomic field with Galois group $\mathbb Z_p$; for $p=2$, let $\mathbb Q_{\mathrm{cyc},2}=\bigcup_{n\ge0}\mathbb Q(\mu_{2^{n+2}})^+$, where $+$ denotes the subfield fixed by complex conjugation. Put $K_\infty=K\mathbb Q_{\mathrm{cyc},p}$ and let $K_n/K$ be its degree-$p^n$ layers. Let $X_{K,p}$ be the inverse limit of the $p$-primary ideal class groups of these layers under norm. Then $X_{K,p}$ is a finitely generated torsion module over $\Lambda(\operatorname{Gal}(K_\infty/K))\cong\mathbb Z_p\llbracket T\rrbracket$.

## Statement references

[R. Sharifi, *Iwasawa Theory*, Proposition 3.2.11 and proof, §3.2, pp. 80–81](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** The original AC, Countable Choice, DC, totally real number field, prime $p$, cyclotomic tower and class-group norm-limit module in the unchanged Statement.

[F1] The module $X=X_{K,p}$ is a compact inverse limit of finite abelian $p$-groups with continuous $\Gamma$-action, and $\Lambda=\mathbb Z_p\lbrack\!\lbrack T\rbrack\!\rbrack$ acts by $T=\gamma-1$ ([[def-cyclotomic-iwasawa-class-group-module]], [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]).

[F2] For some $m,t$, the arithmetic class-field tower gives exact sequences $\mathbb Z_p^{t-1}\to X/\omega_nX\to A_n\to0$ for all $n\ge m$, with $\omega_n=(1+T)^{p^n}-1$ and $A_n$ finite. In particular the ordinary coinvariants have $\mathbb Z_p$-rank at most $t-1$, uniformly in $n$ ([[lem-cyclotomic-class-field-tower-realizes-inertia-trace-kernels]]).

[F3] Every nonzero $f\in\mathbb Z_p\lbrack\!\lbrack T\rbrack\!\rbrack$ is $p^a uP$ with $u$ a unit and $P$ a distinguished monic polynomial. Division by a distinguished monic degree-$d$ polynomial gives a unique remainder of degree below $d$; its quotient power-series module is free over $\mathbb Z_p$ of rank $d$ ([[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]], [[lem-weierstrass-division-for-p-adic-power-series]]).

[A1] AC, CC and DC are the unchanged public hypotheses of the arithmetic and compactness inputs ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** the supplied inertia rank bound, compact Nakayama proved directly, and a finite free rank comparison using Weierstrass division.

1.1 Put $\mathfrak m=(p,T)\subseteq\Lambda$. By [F2], $X/\omega_mX$ is a finitely generated $\mathbb Z_p$-module: lift a finite generating list of the finite $A_m$ and add the at most $t-1$ kernel generators. Thus $(X/\omega_mX)/p$ is finite. Since $\omega_m\in(p,T)$, $X/\mathfrak mX$ is a quotient of that finite group and is finite. The submodule $\mathfrak mX=pX+TX$ is closed, since it is a finite sum of compact images in the Hausdorff compact group $X$. [F1, F2, given, algebra]

2.1 Choose lifts $x_1,\ldots,x_d$ of a basis of $X/\mathfrak mX$ over $\mathbb F_p$, and let $Q$ be the image of the continuous map $\Lambda^d\to X$ sending its standard basis to these lifts. This image is compact and closed. Its quotient $Y=X/Q$ is a compact profinite $\Lambda$-module with $Y=\mathfrak mY$. The finite-coordinate kernels in [F1], after quotient by $Q$, give enough finite $p$-group $\Lambda$-quotients of $Y$ to separate its points; closedness of $Q$ ensures this by the finite-intersection property. On such a quotient $V$, $p^aV=0$ for some $a$ and $\gamma^{p^b}$ acts trivially for some $b$, by continuity and the pro-$p$ action. Since $(\gamma-1)^{p^b}\equiv\gamma^{p^b}-1\pmod p$, $T^{p^b}V\subseteq pV$. Hence a sufficiently high power of $(p,T)$ kills $V$. But $Y=\mathfrak mY$ gives $V=\mathfrak mV$, so repeated substitution gives $V=0$. All its separating finite quotients vanish, hence $Y=0$. Therefore $\Lambda^d\to X$ is surjective, proving finite generation without invoking an unprovided profinite Nakayama theorem. [F1, A1, step 1.1, construct, algebra]

3.1 Suppose $X$ has positive rank $r$ over the fraction field of the domain $\Lambda$. Choose $r$ elements of $X$ whose images form a fraction-field basis. They define an injection $\Lambda^r\to X$ with finitely generated torsion cokernel $C$. A product of annihilators of a finite generating list of $C$ gives a nonzero $f\in\Lambda$ with $fC=0$. By [F3] write $f=p^a uP$, $P$ distinguished of degree $d_0$. After inverting $p$, $P$ kills $C[1/p]$, which is therefore a finite-dimensional $\mathbb Q_p$-vector space: it is generated by finitely many elements over $(\Lambda/(P))[1/p]$, of dimension $d_0$ by division. Write $D=\dim_{\mathbb Q_p}C[1/p]$, a constant independent of $n$. This also includes $P=1$, when $D=0$. [F3, step 2.1, construct, algebra]

4.1 For every $n$, $\omega_n$ is a distinguished monic polynomial of degree $p^n$, so $R_n=\Lambda/(\omega_n)$ is free over $\mathbb Z_p$ of rank $p^n$ by [F3]. Reducing $0\to\Lambda^r\to X\to C\to0$ modulo $\omega_n$ gives $C[\omega_n]\to R_n^r\to X/\omega_nX\to C/\omega_nC\to0$. The left map can also be constructed directly: for $c\in C$ with $\omega_nc=0$, choose a lift $x\in X$, write $\omega_nx$ in the embedded free submodule, and take its class modulo $\omega_n$; different lifts change it by $\omega_n\Lambda^r$. This is precisely the kernel of $R_n^r\to X/\omega_nX$. After tensoring with $\mathbb Q_p$, its rank is at most $D$, because $C[\omega_n][1/p]\subseteq C[1/p]$. Consequently $\operatorname{rank}_{\mathbb Z_p}(X/\omega_nX)\ge rp^n-D$. [F3, step 3.1, construct, algebra]

5.1 For all $n\ge m$, [F2] bounds the same rank by $t-1$. If $r>0$, the lower bound $rp^n-D$ tends to infinity, a contradiction. Thus the fraction-field rank is zero. A finitely generated rank-zero module over a domain is torsion: each generator maps to zero in the fraction-field localization and is killed by some nonzero ring element; their product kills all generators. Hence $X$ is a finitely generated torsion $\Lambda$-module. The proof includes $p=2$, every totally real $K$ and the possible zero module, and proves the original Statement without assuming the stronger bounded-order control claim. [F2, step 2.1, step 3.1, step 4.1, algebra] ∎
