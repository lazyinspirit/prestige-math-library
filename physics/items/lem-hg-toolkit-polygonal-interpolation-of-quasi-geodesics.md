---
id: "lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics"
kind: "lemma"
title: "Hg toolkit polygonal interpolation of quasi geodesics"
deps: ["def-hg-toolkit-local-geodesics-and-hausdorff-control"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Gouëzel–Shchur, corrected quantitative Morse lemma, Lemma 2.1"
      url: "https://arxiv.org/pdf/1810.04579"
    - title: "Gouëzel, AFP Gromov_Hyperbolicity, Isometries.thy, quasi_geodesic_made_lipschitz"
      url: "https://www.isa-afp.org/browser_info/current/AFP/Gromov_Hyperbolicity/Isometries.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $q:[a,b]\to X$ be a $(\lambda,\varepsilon)$-quasi-geodesic in a geodesic metric space, with $a\le b$. If $d(q(a),q(b))\ge2\varepsilon$, there is a continuous $(\lambda,4\varepsilon)$-quasi-geodesic $p:[a,b]\to X$ with the same endpoints which is $2\lambda$-Lipschitz and satisfies
$$ d(q(t),p(t))\le4\varepsilon,\qquad d_H(q([a,b]),p([a,b]))\le2\varepsilon. $$
If instead the endpoint distance is less than $2\varepsilon$, then every image point is within $3\lambda^2\varepsilon+\varepsilon$ of $q(a)$. No continuity of $q$, properness of $X$, or AC is assumed.

## Facts & Assumptions

**Given:** $q,[a,b],\lambda,\varepsilon$ as in the statement.

[F1] Quasi-geodesic inequalities and the two-inclusion meaning of Hausdorff control are as in [[def-hg-toolkit-local-geodesics-and-hausdorff-control]].

## Proof

1.1 If $\varepsilon=0$, set $p=q$: the upper inequality makes it $\lambda$-Lipschitz and continuous, and all approximation errors vanish. If $\varepsilon>0$ and the endpoint distance is less than $2\varepsilon$, the lower inequality gives $b-a<3\lambda\varepsilon$, and the upper inequality gives $d(q(t),q(a))\le\lambda(b-a)+\varepsilon<3\lambda^2\varepsilon+\varepsilon$. This includes a one-point domain. Henceforth assume positive $\varepsilon$ and separated endpoints. Write $h=\varepsilon/\lambda$. The upper endpoint inequality implies $b-a\ge h>0$. [F1, given, algebra]

2.1 If $h\le b-a\le2h$, use a single marked interval $[a,b]$. If $b-a>2h$, put $N=\lfloor(b-a)/h\rfloor-2\ge0$, mark $a,a+h,\ldots,a+Nh$, and then $(a+Nh+b)/2,b$. The last two gaps lie in $[h,3h/2)$; earlier gaps equal $h$. In particular all gaps are between $h$ and $2h$. Choose one geodesic for each consecutive pair of marked images, and interpolate it at constant speed to define $p$. At a zero image distance use the constant map. Endpoints of adjacent pieces agree. On a marked interval of length $H$, its speed is at most $(\lambda H+\varepsilon)/H\le2\lambda$. Splitting a parameter interval at its finitely many marks proves the global $2\lambda$-Lipschitz bound and hence continuity. [step 1.1, F1, algebra]

3.1 For any parameter $t$, the closer endpoint $v$ of its marked interval satisfies $|t-v|\le h$ (including the single-interval case). Since $p(v)=q(v)$, the quasi-geodesic upper bound gives $d(q(t),p(v))\le\lambda h+\varepsilon=2\varepsilon$, while Lipschitz control gives $d(p(t),q(v))\le2\lambda h=2\varepsilon$. These prove the two Hausdorff inclusions individually. Adding the same two bounds gives $d(q(t),p(t))\le4\varepsilon$. [step 2.1, F1, algebra]

3.2 Within one marked interval of length $H$, constant speed gives $d(p(s),p(t))\le(\lambda+\varepsilon/H)|s-t|\le\lambda|s-t|+\varepsilon$. In distinct intervals, join $p(s)$ to its right marked endpoint, then to the left marked endpoint for $t$, then to $p(t)$. The middle pair are original $q$ values. Adding their three upper estimates gives $d(p(s),p(t))\le\lambda(t-s)+3\varepsilon\le\lambda(t-s)+4\varepsilon$ for $s<t$. [step 2.1, F1, algebra]

3.3 For the lower bound, the single-interval case satisfies $t-s\le2h$, so $(t-s)/\lambda-4\varepsilon\le0$. In the longer construction, parameters in the same or adjacent marked intervals satisfy $t-s\le3h$, again making that lower bound nonpositive. For separated intervals write $s\in[u,u+h]$ and $t\in[v,w]$, $u+h<v$, $w-v\le3h/2$. The first interval has length exactly $h$: the two exceptional intervals are the final adjacent ones, so neither can be the first of a separated pair. Put $A=(s-u)/h\in[0,1]$ and $B=(t-v)/h\in[0,3/2]$. [step 2.1, F1, algebra]

4.1 In the separated case select marked endpoints $U,V$ as follows. If $A\le3/5$ take $U=u$, otherwise take $U=u+h$; if $B\le3/5$ take $V=v$, otherwise take $V=w$. The four cases give respectively the following upper bounds for $E=(|s-U|+|t-V|)/h$ and for $J=\max\{0,(t-s)-(V-U)\}/h$: $$ (E,J)\le(6/5,3/5),\ (1,1),\ (3/2,0),\ (13/10,2/5), $$ in the order $(A\le3/5,B\le3/5)$, $(A>3/5,B\le3/5)$, $(A\le3/5,B>3/5)$, $(A>3/5,B>3/5)$. For example the last case has $u+h-s\le2h/5$ and $w-t\le9h/10$, while $(t-s)-(w-u-h)\le u+h-s\le2h/5$. In every case $1+2E+J\le4$. Since $U<V$, the original lower inequality and the $2\lambda$ Lipschitz bound give $d(p(s),p(t))\ge(V-U)/\lambda-\varepsilon-2\lambda hE\ge(t-s)/\lambda-\varepsilon(1+2E+J/\lambda^2)\ge(t-s)/\lambda-4\varepsilon$. [step 2.1, step 3.3, F1, algebra]

5.1 Combining the lower cases, upper estimate and approximation estimates proves all assertions. Equality $s=t$ is immediate and reversed parameter order follows by symmetry. The construction uses finitely many chosen geodesics, and requires no continuity of the original map. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1] ∎
