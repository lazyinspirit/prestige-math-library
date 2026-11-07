---
dependency_level: 0
id: thm-polymath8b-piecewise-polynomial-witness-for-dhl-3-2
kind: lemma
title: "Polymath8b’s piecewise-polynomial witness for DHL[3,2]"
status: draft
origin: pipeline
deps: [thm-multidimensional-riemann-criterion, thm-riemann-fubini-on-product-rectangles]
justified_by: []
proof_strategy: direct
axiom_use: Explicit finite polynomials, finite rational antiderivatives and proper Riemann integrals; no choice axiom.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Statement

For $\epsilon=1/4$ there is a nonzero symmetric piecewise-polynomial function $F:\mathbb R_{\ge0}^3\to\mathbb R$ supported on $\{(x,y,z)\ge0:x+y+z\le3/2\}$ such that $\int_0^\infty F(x,y,z)\,dz=0$ whenever $x,y\ge0$ and $x+y>5/4$, and
$$\frac{\displaystyle3\int_{x+y\le3/4}\left(\int_0^\infty F(x,y,z)\,dz\right)^2dx\,dy}{\displaystyle\int_{x+y+z\le3/2}F(x,y,z)^2dx\,dy\,dz}>2.$$


## Statement references

[[def-polymath8b-enlarged-simplex-variational-quantity|Enlarged-simplex functionals]]


## Facts & Assumptions

**Given:** The original value $\epsilon=1/4$. Every integral below is a proper Riemann integral of a bounded zero extension to an enclosing rectangle. We construct the actual function, rather than assume a numerical witness.

[F1] [[thm-multidimensional-riemann-criterion]] gives the Darboux integrability criterion.

[F2] [[thm-riemann-fubini-on-product-rectangles]] identifies iterated and multiple Riemann integrals when the function and its sections are integrable.

## Proof

1.1 Put $a=3/4$, $b=5/4$, $v=3/2$ and $r(x,y)=v-x-y$. On the chamber $0<y<x<z$ inside $x+y+z<v$, put $u=x+y$, $q=y+z$, $w=z+x$; thus $u<q<w$. Use the following mutually disjoint cells and their coordinate permutations, and the exact integer polynomials in the coefficient table below. Define $F=P_X$ on cell $X$ and extend by coordinate symmetry. Define $F=0$ outside the simplex and on all planes where any coordinate is0, $1/4$ or $3/4$, two coordinates coincide, a pair sum is $a$ or $b$, or the total sum is $v$. This fixes boundary values pointwise. The cell rules are [given, construct]
$$A:w<a;\quad B:q<a<w<b;\quad C:u<a<q<w<b;\quad D:a<u<q<w<b;\quad E:q<a<b<w;\quad G:u<a<b<q;\quad H:a<u<q<b<w.$$
The remaining region $u<a<q<b<w$ is split into $S:z<a$, $T:z>a, x>1/4$, and $U:x<1/4$. These exhaust it: if $x<1/4$ then $w>b$ forces $z>1$, while $z<a$ forces $x>1/2$. These cells and their permutations exhaust the open simplex except the stated finitely many planes. The polynomials have degree at most3, $P_D=0$, and the construction is symmetric by definition. [given, algebra, construct]

2.1 This is a bounded function with compact support. On each cell it is polynomial; its discontinuities are contained in finitely many plane faces. A rectangular mesh of width $\delta$ has cells meeting each non-coordinate plane of total volume $O(\delta)$: fix the other two coordinates and only a bounded number of intervals in a coordinate with nonzero normal component can meet that plane. Coordinate faces satisfy the same bound. Away from these cells polynomial uniform continuity makes the upper-minus-lower Darboux sums tend to zero. Thus [F1] proves integrability of $F,F^2$ and their zero extensions. For a fixed section, a boundary plane is either the whole section, where our prescription is zero, or meets it in finitely many points or lines; the same argument proves section integrability. Integrating a polynomial between affine bounds gives a polynomial, so each marginal is piecewise polynomial on a finite polygonal partition and its square is integrable by the same argument. Consequently [F2] applies to the finite expansions below. [F1, F2, step 1.1, algebra]

3.1 Define $L(P;l,h)=\int_l^hP(x,y,z)\,dz$, using signed polynomial antiderivatives, and let $P^\ell=P(y,z,x)$, $P^m=P(z,y,x)$, $P^h=P(x,y,z)$. For $x\ge y$, these are exactly the sorted-coordinate polynomials when respectively $z<y$, $y<z<x$, and $x<z$. Direct substitution of the printed coefficient table into the following six expressions gives the ZERO polynomial in $x,y$ in every case: [F2, step 1.1, step 2.1, algebra]
$$Z_1=L(P_G^\ell;0,r),\qquad Z_2=L(P_G^\ell;0,y)+L(P_G^m;y,r),$$
$$Z_3=L(P_U^\ell;0,b-x)+L(P_G^\ell;b-x,y)+L(P_G^m;y,r),\qquad Z_4=L(P_U^\ell;0,b-x)+L(P_G^\ell;b-x,r),$$
$$Z_5=L(P_T^\ell;0,r),\qquad Z_6=L(P_E^\ell;0,a-x)+L(P_S^\ell;a-x,a-y)+L(P_H^\ell;a-y,r).$$
These are explicit finite polynomial identities, not assertions of a numerical zero tolerance. For a monomial $c x^i y^jz^k$, the operator used to check them is precisely $c x^iy^j(h^{k+1}-l^{k+1})/(k+1)$; expanding and adding gives all coefficients equal to zero. [step 1.1, step 2.1, algebra]

4.1 We verify the marginal condition at EVERY required point. By symmetry take $x\ge y\ge0$ and $x+y>b$. If $x+y\ge v$, the section has zero integral. If a vertical boundary plane in step1.1 contains the section, the section is identically zero. Otherwise take $x>y>0$, $x+y<v$; then $0<r<1/4$. If $y>1/4$ and $x<3/4$, the section passes through $E,S,H$ in the low-coordinate order, at the cutoffs $a-x,a-y$, and its marginal is $Z_6$. If $y>1/4$ and $x>3/4$, one has $r<y$, $x+r<b$, and $y+r<a$; the whole section is $T$ in the low-coordinate order, giving $Z_5$. If $y<1/4$, then $x>1$; for $x\ge b$ the section consists only of $G$, giving $Z_1$ when $r\le y$ and $Z_2$ when $r\ge y$. For $x<b$, put $c=b-x$. Here $0<c<y$ and $r-c=1/4-y>0$, so the section gives $Z_3$ when $r\ge y$ and $Z_4$ otherwise. Equal interval endpoints simply contribute zero. Boundaries involving $z$ alone remove finitely many points and do not change its integral. These cases exhaust the domain and step3.1 makes every marginal zero. [step 1.1, step 2.1, step 3.1, algebra]

5.1 The table headed I-domains gives inner-to-outer bounds for a disjoint partition of each nonzero cell in the chosen chamber. They follow by solving the affine inequalities in step1.1, retaining $0<y<x<z$ and the radius bound. Thus [F2] and symmetry give [F2, step 1.1, step 2.1, step 4.1, algebra]
$$I:=\int F^2=6\sum_{X\in\{A,B,C,E,S,T,U,G,H\}}\ \sum_{D\text{ in row }X}\int_D P_X^2.$$
To check the tabulated bounds without a geometric assumption, at each of its listed outer ranges insert the lower and upper affine bounds in the defining inequalities of its row. Conversely, their possible binding equalities split precisely at the displayed rational endpoints. The $D$ cell contributes zero. Boundary planes have zero Riemann content by step2.1, including the additional planes on which $F$ was set to zero. [F1, F2, step 1.1, step 2.1, algebra]

6.1 For the numerator, symmetry first interchanges the two remaining coordinates and then the omitted coordinate. Hence [F2, step 2.1, step 5.1, algebra]
$$J:=3\int_{x+y\le a}\left(\int_0^\infty F(x,y,z)dz\right)^2dxdy=6\int_{0<y<x,\ x+y<a}\left(\int_0^{r(x,y)}F(x,y,z)dz\right)^2dxdy.$$
The J-table partitions this wedge into eight polygons. On each polygon the section crosses exactly the cells indicated in its row; the low/middle/high superscripts are defined in step3.1 and are fixed by sorting, so no permutation-normalization factor is implicit. Its marginal is the explicitly listed polynomial $H_j$, and the displayed bounds give $J=6\sum_{j=1}^8\int H_j^2$. Substitution of the affine interval endpoints verifies each row exactly as in step5.1. This proves both the finite partition and the correct factors of6. [F2, step 1.1, step 2.1, step 3.1, step 5.1, algebra]

7.1 The finite antiderivative rule in step3.1 applies successively in the inner-to-outer order in both tables. For a general intermediate monomial it uses the same power rule in the chosen variable, leaving the other variables fixed. Expanding integer powers and collecting rational coefficients therefore evaluates every tabulated integral by finite integer/rational arithmetic. The resulting chamber and wedge ledgers below give [F2, step 3.1, step 5.1, step 6.1, algebra]
$$I=\frac{62082439864241}{507343011840},\qquad J=\frac{9933190664926733}{40587440947200},\qquad J-2I=\frac{1516657}{214748364800}>0.$$
All polynomials, endpoints, integration orders and per-row values are written below. The repository replay implements just this finite power rule and the six zero-polynomial identities; the displayed expressions do not use an imported published computation or a floating quotient. [F2, step 3.1, step 5.1, step 6.1, algebra]

8.1 In particular $I>0$, so the explicitly constructed symmetric function is nonzero. Step4.1 proves its required pointwise marginal vanishing for $x+y>5/4$; steps2.1 and7.1 prove existence and the exact values of both integrals. Dividing the strictly positive excess by $I$ gives $J/I>2$. The support is the full stated simplex of radius $3/2$; no smaller support, extra axiom, or assumed numerical certificate has been substituted. [step 1.1, step 2.1, step 4.1, step 7.1, algebra] ∎

## Exact polynomial and integral data

The following are literal integer polynomials. In this table `*` means multiplication and `**` a nonnegative integer power; there is no normalization by factorials or monomial multiplicities.

```text
P_A = -66+96*x-147*x**2+125*x**3+128*y-122*x*y+104*x**2*y-275*y**2+394*y**3+99*z-58*x*z+63*x**2*z-98*y*z+51*x*y*z+41*y**2*z-112*z**2+24*x*z**2+72*y*z**2+50*z**3
P_B = -41+52*x-73*x**2+25*x**3+108*y-66*x*y+71*x**2*y-294*y**2+56*x*y**2+363*y**3+33*z+15*x*z+22*x**2*z-40*y*z-42*x*y*z+75*y**2*z-36*z**2-24*x*z**2+26*y*z**2+20*z**3
P_C = -22+45*x-35*x**2+63*y-99*x*y+82*x**2*y-140*y**2+54*x*y**2+179*y**3
P_D = 0
P_E = -12+8*x+32*y
P_S = -6+8*x+16*y
P_T = 18-30*x+12*x**2+42*y-20*x*y-66*y**2-45*z+34*x*z+22*z**2
P_U = 94-1823*x+5760*x**2-5128*x**3+54*y-168*x**2*y+105*y**2+1422*x*z-2340*x**2*z-192*y**2*z-128*z**2-268*x*z**2+64*z**3
P_G = 5274-19833*x+18570*x**2-5128*x**3-18024*y+44696*x*y-20664*x**2*y+16158*y**2-19056*x*y**2-4592*y**3-10704*z+26860*x*z-12588*x**2*z+24448*y*z-30352*x*y*z-10980*y**2*z+7240*z**2-9092*x*z**2-8288*y*z**2-1632*z**3
P_H = 8*z
```

In all tables $a=3/4$, $b=5/4$, $v=3/2$, $r=v-x-y$. An entry $(z;l,h),(y;l',h'),(x;l'',h'')$ means integrate in $z$, then $y$, then $x$ between those successive bounds. These are exact rational bounds.

### I-domains

| Cell | Inner-to-outer integration bounds |
|---|---|
| A | $(z;x,a-x),(y;0,x),(x;0,3/8)$ |
| B1 | $(y;0,a-z),(x;a-z,z),(z;3/8,5/8)$ |
| B2 | $(y;0,a-z),(x;a-z,b-z),(z;5/8,a)$ |
| C1 | $(z;a-y,b-x),(x;y,y+1/2),(y;0,1/8)$ |
| C2 | $(z;a-y,b-x),(x;y,a-y),(y;1/8,1/4)$ |
| C3 | $(z;a-y,r),(x;y,a-y),(y;1/4,3/8)$ |
| E | $(y;0,a-z),(x;b-z,z),(z;5/8,a)$ |
| S1 | $(x;b-z,a-y),(z;a-y,a),(y;0,1/8)$ |
| S2 | $(x;b-z,a-y),(z;y+1/2,a),(y;1/8,1/4)$ |
| T1 | $(y;0,v-x-z),(x;b-z,v-z),(z;a,1)$ |
| T2 | $(y;0,v-x-z),(x;1/4,v-z),(z;1,b)$ |
| U | $(z;b-x,b-y),(y;0,x),(x;0,1/4)$ |
| G | $(z;b-y,r),(y;0,x),(x;0,1/4)$ |
| H1 | $(z;x,r),(y;a-x,v-2x),(x;5/8,a)$ |
| H2 | $(z;b-x,r),(y;a-x,1/4),(x;1/2,5/8)$ |

Here B1/B2 and the analogous numbered entries are disjoint subpieces of the single cell with that letter. Their union is precisely that cell modulo its faces. For example C has lower $z=a-y$ and upper $min(b-x,r)$, switching at $y=1/4$; its upper $x$ is $min(y+1/2,a-y)$, switching at $y=1/8$. In S the lower $z$ is $max(a-y,y+1/2)$, with the same switch. In T the lower $x$ is $max(1/4,b-z)$, switching at $z=1$, and the only binding upper $y$ is $v-x-z$. In H the lower $z$ is $max(x,b-x)$, switching at $x=5/8$; below that switch $a-x<y<1/4$, while above it $a-x<y<v-2x$. These reductions, together with $y<x<z$, give all the table rows. In A, B and E the radius bound is redundant; in U and G it gives exactly the displayed upper bound. All bounds have the indicated inner-to-outer order, including the T and G rows.

### J-domains and marginal polynomials

Use the operator and superscripts of step3.1. For shorter formulas put
$$K_0=L(P_A^\ell;0,y)+L(P_A^m;y,x)+L(P_A^h;x,a-x)+L(P_B^h;a-x,a-y),$$
$$K_1=L(P_A^\ell;0,y)+L(P_A^m;y,a-x)+L(P_B^m;a-x,x)+L(P_B^h;x,a-y).$$
The following table supplies the full polynomial $H_j$ and its inner-to-outer $(y,x)$ bounds.

| j | $H_j$ | Bounds |
|---|---|---|
| 1 | $K_0+L(P_C^h;a-y,b-x)+L(P_U^h;b-x,b-y)+L(P_G^h;b-y,r)$ | $(y;0,x),(x;0,1/4)$ |
| 2 | $K_0+L(P_C^h;a-y,r)$ | $(y;1/4,x),(x;1/4,3/8)$ |
| 3 | $K_0+L(P_C^h;a-y,b-x)+L(P_T^h;b-x,r)$ | $(y;0,1/4),(x;1/4,3/8)$ |
| 4 | $K_1+L(P_C^h;a-y,r)$ | $(y;1/4,a-x),(x;3/8,1/2)$ |
| 5 | $K_1+L(P_C^h;a-y,b-x)+L(P_T^h;b-x,r)$ | $(y;0,1/4),(x;3/8,1/2)$ |
| 6 | $K_1+L(P_C^h;a-y,b-x)+L(P_S^h;b-x,a)+L(P_T^h;a,r)$ | $(y;x-1/2,a-x),(x;1/2,5/8)$ |
| 7 | $K_1-L(P_B^h;x,a-y)+L(P_B^h;x,b-x)+L(P_E^h;b-x,a-y)+L(P_S^h;a-y,a)+L(P_T^h;a,r)$ | $(y;0,x-1/2),(x;1/2,5/8)$ |
| 8 | $L(P_A^\ell;0,y)+L(P_A^m;y,a-x)+L(P_B^m;a-x,b-x)+L(P_E^m;b-x,x)+L(P_E^h;x,a-y)+L(P_S^h;a-y,a)+L(P_T^h;a,r)$ | $(y;0,a-x),(x;5/8,a)$ |

This is a disjoint polygonal partition of $0<y<x$, $x+y<a$: split the $x$ interval successively at $1/4,3/8,1/2,5/8$ and then split each vertical interval at the displayed cutoffs. Each listed $z$ endpoint is ordered on its row. The low/middle superscripts use the actual sorted coordinates and thus avoid any ambiguity from naming coordinate permutations.

### Exact integration ledger

The values below are chamber integrals for I (without its factor6) and wedge integrals for J (without its factor6). The monomial power rule in step3.1, iterated in the table order, specifies every arithmetic operation.

| I piece | Exact value |
|---|---|
| A | $510146607951/37580963840$ |
| B1 | $45659974501/19025362944$ |
| B2 | $64876195087/63417876480$ |
| C1 | $1801805723/754974720$ |
| C2 | $188256097591/253671505920$ |
| C3 | $8364218453/56371445760$ |
| E | $367/15360$ |
| S1 | $3/10240$ |
| S2 | $11/30720$ |
| T1 | $2149/245760$ |
| T2 | $13619/5160960$ |
| U | $8574409/247726080$ |
| G | $4419599/148635648$ |
| H1 | $101/10240$ |
| H2 | $101/10240$ |

| J piece | Exact value |
|---|---|
| J1 | $10130397648257/475634073600$ |
| J2 | $149584284132641/162349763788800$ |
| J3 | $425262243958849/48704929136640$ |
| J4 | $290494683274669/487049291366400$ |
| J5 | $1288430621443171/243524645683200$ |
| J6 | $52624275963671/30440580710400$ |
| J7 | $38357488495051/30440580710400$ |
| J8 | $234207344275661/243524645683200$ |


All six coefficient lists for $Z_1,\ldots,Z_6$ are empty after collecting like monomials, i.e. exactly zero. Every arithmetic assertion in this certificate is a finite rational identity. The local standalone checker `research/number-theory-all-141-2026-10-25-escalations/maynard-sieve132/dhl32-exact-witness/replay-polynomials.py` implements sparse-polynomial addition/multiplication and the written power rule using only integer arithmetic and Python `Fraction`. Its complete output is `exact-replay.json`; no external theorem, numerical optimizer or notebook scalar is imported.

## Source notes

The full source §7.4, printedpp62–68, was read: the60-cell construction, complete I/J and marginal formulas, and all polynomial coefficients printedp67. The original carrier's assertion that no coefficient data was available is superseded by the literal source coefficients above. The source's integral values are not proof premises; they are reproduced by local exact antiderivatives. The integration order in the source T/G displays is clarified by the actual inner-to-outer bounds, and coordinate permutations are implemented by sorting. Zero values on additional coordinate-boundary planes guarantee the required pointwise vanishing; they affect none of the integrals. The distinct analytic vanishing-marginal sieve criterion (sourceTheorem3.14) remains a separate obligation and is not inferred from the ordinary enlarged-simplex criterion.
