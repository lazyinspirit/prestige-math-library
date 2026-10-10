---
id: lem-sr-radar-midpoint-for-inertial-observer
kind: lemma
domain: mathematics
title: "The radar round trip of an inertial observer halves at the midpoint of the reception interval"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sr-proper-time-and-observer-decomposition, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-lorentz-orthogonality-and-orthogonal-complement, def-sr-simultaneity-slice-and-rest-distance]
dependency_roles:
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $n$ be a future unit timelike vector, $\eta(n,n)=-1$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]), let $o$ be an event, and let $\lambda_-<\lambda_+$ be real numbers; put $e_-:=o+\lambda_-n$ and $e_+:=o+\lambda_+n$ ([[def-sr-affine-minkowski-model]]). For an event $q$ the following are equivalent:

(i) $q-e_-$ is future null and $e_+-q$ is future null;

(ii) there is $u\in n^\perp$ with $|u|:=\sqrt{\eta(u,u)}=(\lambda_+-\lambda_-)/2$ such that $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$.

In that case $q-e_-=\tfrac{\lambda_+-\lambda_-}{2}n+u$ and $e_+-q=\tfrac{\lambda_+-\lambda_-}{2}n-u$, the affine midpoint $m:=o+\tfrac{\lambda_-+\lambda_+}{2}n=\tfrac{e_-+e_+}{2}$ satisfies $\eta(n,q-m)=0$ (so $q$ lies in the slice $H(m,n)$) and $|q-m|=(\lambda_+-\lambda_-)/2$ ([[def-sr-simultaneity-slice-and-rest-distance]]). In particular for fixed $e_-,e_+$ all admissible reflection events $q$ have the same midpoint $m$ and the same rest distance $(\lambda_+-\lambda_-)/2$, and differ only in the direction $u$ of $n^\perp$.

## Facts & Assumptions

**Given:** A future unit timelike vector $n$, events $o,e_-=o+\lambda_-n,e_+=o+\lambda_+n$ with $\lambda_-<\lambda_+$, an event $q$, and the two statements (i) and (ii) of the Statement ([[def-sr-affine-minkowski-model]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[F1] Every $v\in V$ has the unique decomposition $v=-\eta(n,v)n+h(v)$ with $h(v):=v+\eta(n,v)n\in n^\perp$, where $n^\perp=\{w:\eta(n,w)=0\}$ is a three-dimensional linear subspace on which $\eta$ restricts to a positive-definite form; $|w|=\sqrt{\eta(w,w)}$ is a norm on $n^\perp$ ([[thm-sr-proper-time-and-observer-decomposition]] clause (c), [[def-lorentz-orthogonality-and-orthogonal-complement]]).

[F2] For a nonzero null $v$, write $v=\mu n+u$ by [F1], with $\mu=-\eta(n,v)$ and $u\in n^\perp$. Nullity gives $|u|^2=\mu^2$; hence $\mu\ne0$, since $\mu=0$ would force $u=v=0$. If $\mu>0$, the vectors $n+t u/\mu$ for $0\le t<1$ are timelike, as their square is $-1+t^2$, and form a continuous path from $n$ in the timelike set. They therefore lie in its chosen component $C^+$, and their limit $v/\mu$ belongs to its closure. Thus $v$ is future null. If $\mu<0$, apply this argument to $-v$; then $v$ is past null and cannot be future null. Consequently $v$ is future null exactly when $\eta(n,v)<0$ ([[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]).

[F3] $\eta$ is bilinear and symmetric, and $\eta(n,n)=-1$; in the decomposition of [F1], $\eta\bigl(-\eta(n,v)n+h(v),-\eta(n,v)n+h(v)\bigr)=-\eta(n,v)^2+\eta(h(v),h(v))$ because $h(v)\in n^\perp$ ([[def-sr-affine-minkowski-model]]).

[F4] For a slice $H(m,n)=\{q:\eta(n,q-m)=0\}$ the rest distance is $d_n(m,q)=\sqrt{\eta(q-m,q-m)}$, and $q-m\in n^\perp$ makes $\eta(q-m,q-m)\ge0$ ([[def-sr-simultaneity-slice-and-rest-distance]]).

## Proof

**Proof technique:** direct.

1.1 Set $d:=q-e_-$ and $r:=e_+-q$, so that $d+r=e_+-e_-=(\lambda_+-\lambda_-)n$. By [F1] write $d=-\eta(n,d)n+h(d)$ with $h(d)\in n^\perp$; by [F2] and [F3] a nonzero vector $v$ is future null exactly when $\eta(v,v)=0$ and $\eta(n,v)<0$, and for such a $v$ the decomposition satisfies $\eta(n,v)^2=|h(v)|^2$ by [F3] applied to $\eta(v,v)=0$. Also $r=(\lambda_+-\lambda_-)n-d=\bigl(\lambda_+-\lambda_-+\eta(n,d)\bigr)n-h(d)$ by [F1], because $-d=\eta(n,d)n-h(d)$. [F1, F2, F3]

1.2 (ii) implies (i): assume $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ with $u\in n^\perp$ and $|u|=(\lambda_+-\lambda_-)/2=:\rho$. Then $q-e_-=\rho n+u$ by the affine action, and by [F3] $\eta(q-e_-,q-e_-)=-\rho^2+|u|^2=0$ while $\eta(n,q-e_-)=-\rho<0$, so $q-e_-$ is future null by [F2]; likewise $e_+-q=\rho n-u$ satisfies $\eta(e_+-q,e_+-q)=-\rho^2+|u|^2=0$ and $\eta(n,e_+-q)=-\rho<0$, so $e_+-q$ is future null. [F2, F3]

2.1 (i) implies (ii): assume $d$ and $r$ are future null. By step 1.1 applied to $d$ one has $\eta(n,d)<0$; put $\mu:=-\eta(n,d)>0$, so $d=\mu n+h(d)$ and $|h(d)|^2=\eta(n,d)^2=\mu^2$, hence $|h(d)|=\mu$ by [F1]. Applying step 1.1 to $r$, whose expression is $\bigl(\lambda_+-\lambda_--\mu\bigr)n-h(d)$: its future nullness gives $\eta(n,r)=-\bigl(\lambda_+-\lambda_--\mu\bigr)<0$, and $\eta(r,r)=-\bigl(\lambda_+-\lambda_--\mu\bigr)^2+|h(d)|^2=0$ by [F3]. Hence $\bigl(\lambda_+-\lambda_--\mu\bigr)^2=\mu^2$, and since $\eta(n,r)=-\bigl(\lambda_+-\lambda_--\mu\bigr)<0$ we have $\lambda_+-\lambda_--\mu>0$, so the positive root applies: $\lambda_+-\lambda_--\mu=\mu$, that is $\mu=(\lambda_+-\lambda_-)/2$. Therefore $q=e_-+d=o+(\lambda_-+\mu)n+h(d)=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ with $u:=h(d)\in n^\perp$, $|u|=\mu=(\lambda_+-\lambda_-)/2$; this is (ii). [F1, F3, step 1.1]

3.1 Midpoint and distance: assume (i), hence (ii) with $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ as produced in step 2.1. Put $m:=o+\tfrac{\lambda_-+\lambda_+}{2}n$; since $e_\pm=o+\lambda_\pm n$, the displacement identity $m-e_-=\tfrac{\lambda_+-\lambda_-}{2}n=e_+-m$ shows that $m$ is the affine midpoint $\tfrac{e_-+e_+}{2}$. Then $q-m=u\in n^\perp$, so $\eta(n,q-m)=0$, that is $q\in H(m,n)$; and $d_n(m,q)=\sqrt{\eta(u,u)}=|u|=(\lambda_+-\lambda_-)/2$ by [F4] and step 2.1. [F4, step 2.1]

4.1 Conclusion: step 2.1 proves (i)$\Rightarrow$(ii) and step 1.2 proves (ii)$\Rightarrow$(i), so the two conditions are equivalent; step 3.1 shows that whenever they hold the reflection event satisfies $q-e_-=\tfrac{\lambda_+-\lambda_-}{2}n+u$ and $e_+-q=\tfrac{\lambda_+-\lambda_-}{2}n-u$ with the same horizontal vector $u$, lies in the slice $H(m,n)$ of the fixed midpoint $m=\tfrac{e_-+e_+}{2}$, and has the fixed rest distance $(\lambda_+-\lambda_-)/2$. Since the data $e_-$, $e_+$ determine $m$ and the norm $\rho=(\lambda_+-\lambda_-)/2$, two admissible reflection events differ only by the choice of $u\in n^\perp$ with $|u|=\rho$; such $u$ exist because $n^\perp$ is three-dimensional and $\rho>0$. This is the full assertion. [step 2.1, step 1.2, step 3.1] ∎

## Remarks

- **The two null conditions encode emission and reception.** The displacement $q-e_-$ is the vector from the emission event to the reflection event and $e_+-q$ that from the reflection event to the reception event; both are future null exactly when ideal rays emitted at $e_-$ and at $q$ reach $q$ and $e_+$ respectively, in the sense of the ideal-light assumption. The lemma is purely geometric and makes no claim about an apparatus.

- **The midpoint and the rest distance are exhausted.** The admissible set is $\{m+u:u\in n^\perp,\ |u|=\rho\}$, a two-sphere of radius $\rho$ in the three-dimensional rest space $n^\perp$ of the observer direction $n$; it contains the event $m+\rho e/|e|$ for any nonzero $e\in n^\perp$, so it is nonempty. No global synchronization or congruence statement is made here.
