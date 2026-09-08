---
id: lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex
kind: lemma
title: "The low-degree filtration sequence of a first-quadrant bicomplex"
status: draft
origin: pipeline
deps: [def-chain-complex-in-an-abelian-category, def-homology-object-of-a-chain-complex]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Let $D_{pq}$, $p,q\ge0$, be a bicomplex with $h:D_{pq}\to D_{p-1,q}$, $v:D_{pq}\to D_{p,q-1}$, $h^2=v^2=hv+vh=0$. Set $T_n=\bigoplus_{p+q=n}D_{pq}$, $d=h+v$, and $E^2_{pq}=H_p(H_q(D_{\bullet,*},v),h)$. Then there is a natural exact sequence
$$H_2(T)\xrightarrow{e_2}E^2_{20}\xrightarrow{d_2}E^2_{01}\xrightarrow{j}H_1(T)\xrightarrow{e_1}E^2_{10}\longrightarrow0.$$
The filtration is $F_rT_n=\bigoplus_{p\le r,p+q=n}D_{pq}$. This holds for module bicomplexes, and with the same kernel/image constructions in an abelian category. No general spectral-sequence convergence theorem is assumed.

## Facts & Assumptions

**Given:** A first-quadrant anticommuting bicomplex as stated; missing negative positions mean zero.

[F1] A differential has square zero ([[def-chain-complex-in-an-abelian-category]]).

[F2] Homology is cycles modulo boundaries ([[def-homology-object-of-a-chain-complex]]).

## Proof

1.1 The identity $(h+v)^2=0$ makes T a chain complex, and h lowers p while v preserves it, so $F_rT$ is a subcomplex. The quotient $F_rT/F_{r-1}T$ has just differential v; its homology is the rth column homology, whose induced differential is h. This yields the stated E2 subquotients using only kernels and images. Below, an element denotes a representative in these subquotients. In an abelian category the same notation means a morphism into the indicated kernel after pulling back the epimorphism onto the image; every lift below is of this form, and equality of subobjects can be checked after such epimorphic pullbacks. Thus the calculations do not require objects to have underlying sets. [F1, F2, given, algebra]

2.1 A class in $E^2_{20}$ is represented by $x\in D_{20}$ with $hx=-vy$ for some $y\in D_{11}$. Set $d_2[x]=[hy]\in E^2_{01}$. Indeed $vhy=-hvy=h^2x=0$. Replacing y by another such lift changes hy by h of a vertical cycle, zero in E2. Replacing x by $x+vt+hu$ with $t\in D_{21}$, $u\in D_{30}$ changes a compatible y to $y+ht$; its h-image is unchanged. These are precisely the vertical-boundary and horizontal-boundary changes allowed in $E^2_{20}$. Hence d2 is a well-defined homomorphism. [step 1.1, algebra]

3.1 A total 2-cycle has components $(x,y,z)\in D_{20}\oplus D_{11}\oplus D_{02}$ with $hx+vy=0$ and $hy+vz=0$. Define $e_2[(x,y,z)]=[x]$. A total 3-boundary changes x by $hu+vt$ from $D_{30}$ and $D_{21}$, so e2 is well-defined. Its image is in the kernel of d2. Conversely if $d_2[x]=0$, choose y as in step 2.1. Then $hy=ha+vb$ for a vertical cycle $a\in D_{11}$ and $b\in D_{02}$. The triple $(x,y-a,-b)$ is a total cycle and maps to [x]. This proves exactness at $E^2_{20}$. [step 2.1, algebra]

3.2 A vertical cycle $z\in D_{01}$ is a total cycle; define $j[z]=[(0,z)]$. Replacing z by $vb+ha$ with $va=0$ adds the total boundary $d(b+a)$, so j is well-defined on $E^2_{01}$. If z=hy as in step 2.1, then $z=d(x+y)$, proving $jd_2=0$. Conversely, if $(0,z)=d(x+y+b)$, its p=1 component gives $hx+vy=0$ and its p=0 component gives $z=hy+vb$. Therefore $[z]=d_2[x]$. This proves exactness at $E^2_{01}$. [step 2.1, algebra]

4.1 A total 1-cycle $(a,b)\in D_{10}\oplus D_{01}$ satisfies $ha+vb=0$. Define $e_1[(a,b)]=[a]\in E^2_{10}$. Boundaries change a by $hx+vy$, so e1 is well-defined. Every $E^2_{10}$ representative a admits b with $ha=-vb$, hence e1 is onto. Clearly $e_1j=0$. If $[a]=0$, write $a=hx+vy$ with $x\in D_{20}$, $y\in D_{11}$. Subtract $d(x+y)$ from $(a,b)$; the result is $(0,b-hy)$, a vertical cycle, hence in the image of j. This proves exactness at $H_1(T)$ and at the final nonzero term. [step 1.1, step 3.2, algebra]

5.1 All constructions commute with morphisms of bicomplexes: they use the same components, and images of chosen lifts are compatible lifts in the target, whose class is independent of the lift. Only components of total degree at most three were used. In particular $F_0H_1(T)=\operatorname{im}j\cong E^2_{01}/\operatorname{im}d_2$ and $H_1(T)/F_0H_1(T)\cong E^2_{10}$ by steps 3.2–4.1. These explicit subquotients establish the required low-degree filtration assertions without an infinite limiting process. Zero rows or columns are permitted throughout. [step 3.1, step 3.2, step 4.1, algebra] ∎

## Remarks

The source low-degree sequences are Löh Theorem 3.2.18 and Weibel Low Degree Terms 6.8.3. The finite component chase above supplies the filtration argument locally.
