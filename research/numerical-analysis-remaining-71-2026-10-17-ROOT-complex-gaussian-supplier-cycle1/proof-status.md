# Complex Gaussian product supplier: unresolved proof obligation

This is planning evidence only. It supplies no accepted item, test result, or proof-contract credit.

## Exact target

For fixed compatible complex matrices S,T and iid normalized circular Gaussian entries
G_ij=(X_ij+iY_ij)/sqrt(2), the requested supplier is

E ||S G T||_2 <= ||S||_2 ||T||_F + ||S||_F ||T||_2.

The Gaussian planning owner's existing inverse estimates are sufficient to assemble the approved complex expected randomized-rangefinder bound **if this supplier is proved**. In particular, the exact complex inverse Frobenius second moment k/p would improve the first coefficient to 1+sqrt(k/p), which implies the approved 1+sqrt(k/(p-1)). This observation is conditional and does not discharge the supplier.

## A concrete obstruction to the tempting comparison proof

For a,b in complex Euclidean spaces, put

X_(a,b)=Re(a* G b),

X'_(a,b)=X_(a,b)+z ||a|| ||b|| /sqrt(2),

Y_(a,b)=||b|| Re(a* g)+||a|| Re(h* b),

where z is standard real and g,h are independent normalized complex Gaussian vectors, all mutually independent. X' and Y have equal pointwise variance ||a||^2 ||b||^2. Write c=a*a', d=b*b', A=||a||, A'=||a'||, B=||b||, B'=||b'||. Their covariance difference is

Cov(X'_(a,b),X'_(a',b'))-Cov(Y_(a,b),Y_(a',b'))

= (AA' BB' + Re(c conjugate(d)) - BB' Re(c) - AA' Re(d))/2.

Unlike the real version, this expression need not be nonnegative. Already in dimension one take a=b=1, a'=exp(i*pi/3), b'=exp(-i*pi/3). Then Cov(X',X'')=1/4 and Cov(Y,Y')=1/2. All four pointwise variances are 1, so

E (X'_(a,b)-X'_(a',b'))^2=3/2 > 1=E (Y_(a,b)-Y_(a',b'))^2.

Thus the finite Gaussian increment-comparison hypothesis fails. This is a counterexample to the proposed proof mechanism, **not** a counterexample to the target product inequality.

## Full-text source review actually performed

Read the local full-text HMT source `../numerical-analysis-remaining-71-2026-10-17-ROOT-gaussian-planning-cycle1/hmt.txt`, section 10.1 and appendix A.1--A.2 (the source PDF is also in that packet). Proposition A.2 explicitly states the product estimate for **real** S,T,G, attributes it to Gordon [62,63], and provides no proof. The appendix introduction says that the complex case is similar and gives better results; that sentence alone is insufficient to reconstruct the missing normalized-complex sharp product comparison. HMT's other suggested references are Davidson--Szarek section 2.3 and Ledoux--Talagrand section 3.3. No full proof of the needed complex claim was obtained from those references during this supplier investigation.

Attempts to obtain Gordon's full paper through the Springer PDF endpoint and Davidson--Szarek through plausible author-hosted PDF endpoints did not yield those full texts. Search-engine requests returned bot/challenge pages or irrelevant results; they supply no mathematical evidence. An unrelated guessed arXiv download was inspected and deleted rather than retained as a purported source.

## Status and permissible handoff

No rigorous proof or counterexample to the exact target was found in this investigation. The real product estimate, both-field inverse moments, and conditional complex assembly remain sound independent work owned by the Gaussian planning owner. Do not relabel this lack of a locally reconstructed proof as a known open problem. Do not drop the complex field or increase the approved constants to make the planning contract appear complete.

The smallest remaining obligation is a valid sharp complex product proof, or a separately proved complex expected rangefinder bound with exactly the approved coefficients. A source citation or the invalid real-part Slepian argument cannot serve as that supplier.
