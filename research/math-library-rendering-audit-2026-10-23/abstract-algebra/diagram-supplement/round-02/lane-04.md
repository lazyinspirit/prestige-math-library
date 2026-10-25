# Round 02, lane 04 — Cayley–Dickson octonion cycles

**Item:** def-octonion-algebra-by-cayley-dickson  
**Assessment:** Checked correct. Both listed local screenshots were viewed at original resolution.

The diagram uses the seven imaginary basis units fixed by the source: \(i,j,k,\ell,i\ell,j\ell,k\ell\), with \(\ell=(0,1)\) and \(i\ell=(0,i)\), etc. Each row has arrows \(x\to y\to z\to x\), matching the source's stated convention \(xy=z,\ yz=x,\ zx=y\).

I checked all seven cycles against the pair multiplication formula and the quaternion rules:

- \(i\to j\to k\to i\): \(ij=k,\ jk=i,\ ki=j\).
- \(i\to\ell\to i\ell\to i\): \(i\ell=i\ell,\ \ell(i\ell)=i,\ (i\ell)i=\ell\).
- \(j\to\ell\to j\ell\to j\): \(j\ell=j\ell,\ \ell(j\ell)=j,\ (j\ell)j=\ell\).
- \(k\to\ell\to k\ell\to k\): \(k\ell=k\ell,\ \ell(k\ell)=k,\ (k\ell)k=\ell\).
- \(i\to k\ell\to j\ell\to i\): \(i(k\ell)=j\ell,\ (k\ell)(j\ell)=i,\ (j\ell)i=k\ell\).
- \(j\to i\ell\to k\ell\to j\): \(j(i\ell)=k\ell,\ (i\ell)(k\ell)=j,\ (k\ell)j=i\ell\).
- \(k\to j\ell\to i\ell\to k\): \(k(j\ell)=i\ell,\ (j\ell)(i\ell)=k,\ (i\ell)k=j\ell\).

As an anti-cyclic check, the pair formula gives \(\ell i=(0,\bar i)=(0,-i)=-i\ell\), agreeing with the source's sign convention for reversed products. The displayed labels and arrow directions agree with the multiplication convention; no diagram/math mismatch was found. The screenshots show the whole diagram and no relevant rendering issue.
